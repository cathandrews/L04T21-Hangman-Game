import GameBoard from "./GameBoard";
import renderer from "react-test-renderer";

// Snapshot test for the GameBoard component
test("renders GameBoard component correctly", () => {
  // Render the GameBoard component to JSON
  const tree = renderer.create(<GameBoard />).toJSON();
  // Assert that the rendered component matches the snapshot
  expect(tree).toMatchSnapshot();
});
