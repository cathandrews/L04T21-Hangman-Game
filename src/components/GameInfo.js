// Import necessary libraries
import { Alert } from 'react-bootstrap';

// Component to display game information
const GameInfo = ({ incorrectGuesses }) => {
  return (
    <div className="game-info">
      <Alert variant="info" style={{ backgroundColor: '#e6f2ff', borderColor: '#b3e0ff' }}>
        You have made {incorrectGuesses} out of 10 guesses.
      </Alert>
    </div>
  );
};

export default GameInfo;
