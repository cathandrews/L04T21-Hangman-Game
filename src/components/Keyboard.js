// Import necessary libraries
import { Button } from 'react-bootstrap';

// Component to render the keyboard for letter selection
const Keyboard = ({ onGuess, guessedLetters, word }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  // Check if a letter is in the word
  const isLetterInWord = (letter) => {
    return word.toLowerCase().includes(letter.toLowerCase());
  };

  return (
    <div className="keyboard">
      {letters.map(letter => {
        const isGuessed = guessedLetters.includes(letter.toLowerCase());
        const isCorrect = isGuessed && isLetterInWord(letter);
        return (
          <Button
            key={letter}
            variant={isCorrect ? "success" : isGuessed ? "secondary" : "primary"}
            onClick={() => onGuess(letter)}
            disabled={isGuessed}
            className="me-1 mb-1"
          >
            {letter}
          </Button>
        );
      })}
    </div>
  );
};

export default Keyboard;
