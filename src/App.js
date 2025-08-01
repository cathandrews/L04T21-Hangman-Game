// Import necessary libraries and components
import "bootstrap/dist/css/bootstrap.min.css";
import GameBoard from "./components/GameBoard";
import "./App.css";

// Main App component that serves as the entry point for the Hangman game
function App() {
  // Render the GameBoard component which contains the entire game logic and UI
  return (
    <div className="App">
      <GameBoard />
    </div>
  );
}

export default App;
