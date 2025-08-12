import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ApplyModal from "./apply";
import axios from "axios";

vi.mock("axios");

describe("ApplyModal", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("submits application data", async () => {
    const mockOnClose = vi.fn();
    axios.post.mockResolvedValue({});

    render(<ApplyModal isOpen={true} onClose={mockOnClose} jobId="123" />);

    await userEvent.type(screen.getByPlaceholderText(/first name/i), "John");
    await userEvent.type(screen.getByPlaceholderText(/second name/i), "Doe");
    await userEvent.type(screen.getByPlaceholderText(/email/i), "john@example.com");

    const file = new File(["dummy content"], "resume.pdf", { type: "application/pdf" });
    await userEvent.upload(screen.getByLabelText(/attach cv/i), file);

    await userEvent.click(screen.getByRole("button", { name: /submit application/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3001/applications",
        expect.objectContaining({
          firstName: "John",
          secondName: "Doe",
          email: "john@example.com",
          jobId: "123",
          cvFileName: "resume.pdf",
        })
      );
      expect(mockOnClose).toHaveBeenCalled();
    });
  });
});
