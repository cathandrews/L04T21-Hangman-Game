import { render, screen, fireEvent } from "@testing-library/react";
import Keyboard from "./Keyboard";

// Test suite for the Keyboard component
describe("Keyboard Component", () => {
  // Mock function to simulate the onGuess callback
  const mockOnGuess = jest.fn();

  // Test to check if all alphabet letters are rendered
  it("renders all alphabet letters", () => {
    // Render the Keyboard component with the mock onGuess function
    render(<Keyboard onGuess={mockOnGuess} guessedLetters={[]} word="test" />);
    // Check if each letter of the alphabet is present in the document
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    letters.forEach((letter) => {
      expect(screen.getByText(letter)).toBeInTheDocument();
    });
  });

  // Test to check if the onGuess function is called when a letter is clicked
  it("calls onGuess when a letter is clicked", () => {
    // Render the Keyboard component with the mock onGuess function
    render(<Keyboard onGuess={mockOnGuess} guessedLetters={[]} word="test" />);
    // Simulate a click on the letter 'A'
    fireEvent.click(screen.getByText("A"));
    // Assert that the mock function was called with 'A'
    expect(mockOnGuess).toHaveBeenCalledWith("A");
  });
});
