// Import necessary libraries
import React from 'react';
import { Button } from 'react-bootstrap';

// Keyboard component for the Hangman game
const Keyboard = ({ onGuess, guessedLetters, word }) => {
  // Define the three rows of the keyboard
  const row1 = 'ABCDEFGHIJ'.split(''); 
  const row2 = 'KLMNOPQRST'.split(''); 
  const row3 = 'UVWXYZ'.split(''); 

  // Function to check if a letter is in the word
  const isLetterInWord = (letter) => {
    return word.toLowerCase().includes(letter.toLowerCase());
  };

  // Render the keyboard rows
  return (
    <div className="keyboard">
      {/* First row of the keyboard */}
      <div className="keyboard-row">
        {row1.map(letter => {
          // Check if the letter has been guessed and if it is in the word
          const isGuessed = guessedLetters.includes(letter.toLowerCase());
          const isCorrect = isGuessed && isLetterInWord(letter);

          // Render each letter as a button
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

      {/* Second row of the keyboard */}
      <div className="keyboard-row">
        {row2.map(letter => {
          // Check if the letter has been guessed and if it is in the word
          const isGuessed = guessedLetters.includes(letter.toLowerCase());
          const isCorrect = isGuessed && isLetterInWord(letter);

          // Render each letter as a button
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

      {/* Third row of the keyboard */}
      <div className="keyboard-row">
        {row3.map(letter => {
          // Check if the letter has been guessed and if it is in the word
          const isGuessed = guessedLetters.includes(letter.toLowerCase());
          const isCorrect = isGuessed && isLetterInWord(letter);

          // Render each letter as a button
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
    </div>
  );
};

export default Keyboard;
