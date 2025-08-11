import React from "react";
import { render, screen } from "@testing-library/react";
import WordDisplay from "./WordDisplay";

// Test suite for the WordDisplay component
describe("WordDisplay Component", () => {
  // Test to check if the component displays the word with guessed letters and placeholders
  it("displays the word with guessed letters and placeholders", () => {
    // Render the WordDisplay component with the word "TEST" and guessed letters 'T' and 'E'
    render(<WordDisplay word="TEST" guessedLetters={["T", "E"]} />);
    // Assert that the correct letters and placeholders are displayed
    expect(screen.getAllByText("T").length).toBe(2); // Check for two 'T's
    expect(screen.getByText("E")).toBeInTheDocument(); // Check for 'E'
    expect(screen.getAllByText("_").length).toBe(1); // Check for one '_'
  });
});
