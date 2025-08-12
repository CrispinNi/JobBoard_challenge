import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import * as api from "../mock/api";

// Mock dispatch
const mockDispatch = vi.fn();

// Minimal fake Redux store for Provider
const mockStore = {
  getState: () => ({}),
  dispatch: mockDispatch,
  subscribe: () => {},
};

// Mock Redux hooks but keep Provider
vi.mock("react-redux", async () => {
  const actual = await vi.importActual("react-redux");
  return {
    ...actual,
    useDispatch: () => mockDispatch,
  };
});

// Mock Navigation
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

// Mock Toast
vi.mock("react-toastify", () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

// Mock API
vi.mock("../mock/api");

describe("LoginPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("logs in as user and navigates to /", async () => {
    api.mockLogin.mockResolvedValue({ email: "user@test.com", role: "user" });

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "user@test.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "123456");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(api.mockLogin).toHaveBeenCalledWith("user@test.com", "123456");
      expect(mockNavigate).toHaveBeenCalledWith("/");
    });
  });

  it("logs in as admin and navigates to /admin", async () => {
    api.mockLogin.mockResolvedValue({ email: "admin@test.com", role: "admin" });

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "admin@test.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "123456");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/admin");
    });
  });

  it("shows error toast on failure", async () => {
    api.mockLogin.mockRejectedValue(new Error("Invalid credentials"));

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    await userEvent.type(screen.getByPlaceholderText(/email/i), "bad@test.com");
    await userEvent.type(screen.getByPlaceholderText(/password/i), "wrong");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(api.mockLogin).toHaveBeenCalled();
    });
  });
});
