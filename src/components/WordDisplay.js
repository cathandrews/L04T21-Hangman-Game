// Import necessary libraries
import { Badge } from 'react-bootstrap';

// Component to display the word with guessed letters revealed
const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split('').map((letter, index) => (
        <Badge key={index} bg={guessedLetters.includes(letter) ? "success" : "secondary"} className="me-1">
          {guessedLetters.includes(letter) ? letter : '_'}
        </Badge>
      ))}
    </div>
  );
};

export default WordDisplay;
