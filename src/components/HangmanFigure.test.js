import { render } from "@testing-library/react";
import HangmanFigure from "./HangmanFigure";

// Test suite for the HangmanFigure component
describe("HangmanFigure Component", () => {
  // Basic test to ensure the component renders without crashing
  it("renders without crashing", () => {
    // Render the HangmanFigure component with 3 incorrect guesses
    render(<HangmanFigure incorrectGuesses={3} />);
    // No assertions needed, just checking if it renders
  });
});
