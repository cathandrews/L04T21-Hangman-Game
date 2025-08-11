import { fetchWord } from "./fetch";

// Test suite for the fetchWord function
describe("fetchWord", () => {
  // Mock console.error to silence error logs during tests
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    // Mock the global fetch function to return a resolved promise
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: "mock data" }),
      })
    );
  });

  // Restore console.error after each test
  afterEach(() => {
    console.error.mockRestore();
  });

  // Test to check if the function fetches data successfully from an API
  it("fetches successfully data from an API", async () => {
    const data = await fetchWord();
    // Assert that the fetched data matches the expected mock data
    expect(data).toEqual({ data: "mock data" });
  });

  // Test to check if the function handles server errors correctly
  it("handles server errors", async () => {
    // Mock the global fetch function to return a rejected promise
    global.fetch = jest.fn(() => Promise.reject(new Error("Network Error")));
    // Assert that the function throws a network error
    await expect(fetchWord()).rejects.toThrow("Network Error");
  });
});
