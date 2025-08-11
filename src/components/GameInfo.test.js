import { render, screen } from "@testing-library/react";
import GameInfo from "./GameInfo";

// Test suite for the GameInfo component
describe("GameInfo Component", () => {
  // Test to check if the component correctly displays the number of incorrect guesses
  it("displays the number of incorrect guesses", () => {
    // Render the GameInfo component with 3 incorrect guesses
    render(<GameInfo incorrectGuesses={3} />);
    // Assert that the component displays the correct number of incorrect guesses
    expect(
      screen.getByText(/You have made 3 out of 10 guesses/)
    ).toBeInTheDocument();
  });
});
