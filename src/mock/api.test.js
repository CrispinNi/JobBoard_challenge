import { mockLogin, mockRegister } from "./api";

global.fetch = vi.fn();

describe("mock API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("registers a new user", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({ users: [] }),
    });

    const result = await mockRegister("new@test.com", "pass");
    expect(result).toEqual({ email: "new@test.com" });
  });

  it("throws if user exists on register", async () => {
    fetch.mockResolvedValueOnce({
      json: async () => ({ users: [{ email: "exists@test.com" }] }),
    });

    await expect(mockRegister("exists@test.com", "pass")).rejects.toThrow("User already exists");
  });

  it("logs in as admin", async () => {
    fetch
      .mockResolvedValueOnce({ json: async () => ({ users: [] }) }) // auth.json
      .mockResolvedValueOnce({
        json: async () => ({ admins: [{ email: "admin@test.com", password: "123" }] }),
      }); // adminAuth.json

    const result = await mockLogin("admin@test.com", "123");
    expect(result.role).toBe("admin");
  });

  it("logs in as user", async () => {
    fetch
      .mockResolvedValueOnce({ json: async () => ({ users: [{ email: "user@test.com", password: "123" }] }) })
      .mockResolvedValueOnce({ json: async () => ({ admins: [] }) });

    const result = await mockLogin("user@test.com", "123");
    expect(result.role).toBe("user");
  });

  it("throws on invalid login", async () => {
    fetch
      .mockResolvedValueOnce({ json: async () => ({ users: [] }) })
      .mockResolvedValueOnce({ json: async () => ({ admins: [] }) });

    await expect(mockLogin("no@test.com", "bad")).rejects.toThrow("Invalid credentials");
  });
});
