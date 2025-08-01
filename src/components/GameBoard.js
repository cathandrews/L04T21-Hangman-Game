// Import necessary libraries and components
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Alert } from "react-bootstrap";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import HangmanFigure from "./HangmanFigure";
import GameInfo from "./GameInfo";
import "./GameBoard.css";

// Main component for the Hangman game
const GameBoard = () => {
  // State management for the game
  const [word, setWord] = useState(""); // The word to be guessed
  const [dictionaryWords, setDictionaryWords] = useState([]); // List of words from the dictionary
  const [guessedLetters, setGuessedLetters] = useState([]); // Letters that have been guessed
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Number of incorrect guesses
  const [gameStatus, setGameStatus] = useState("in progress"); // Current status of the game
  const [showHelp, setShowHelp] = useState(false); // Whether to show the help modal

  // Load dictionary and set up the game on component mount
  useEffect(() => {
    const loadDictionary = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/dictionary.txt`
        );
        const text = await response.text();
        const lines = text
          .split("\n")
          .map((line) => line.trim().toLowerCase())
          .filter((word) => /^[a-z]+$/.test(word));
        setDictionaryWords(lines);
        const randomWord = lines[Math.floor(Math.random() * lines.length)];
        setWord(randomWord);
      } catch (error) {
        console.error("Failed to load dictionary:", error);
      }
    };

    loadDictionary();
  }, []);

  // Handle letter selection
  const handleGuess = (letter) => {
    const lowerLetter = letter.toLowerCase();
    if (!guessedLetters.includes(lowerLetter)) {
      setGuessedLetters([...guessedLetters, lowerLetter]);
      if (!word.includes(lowerLetter)) {
        setIncorrectGuesses((prev) => prev + 1);
      }
    }
  };

  // Restart the game with a new random word
  const restartGame = () => {
    if (dictionaryWords.length === 0) return;
    const randomWord =
      dictionaryWords[Math.floor(Math.random() * dictionaryWords.length)];
    setWord(randomWord);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    setGameStatus("in progress");
  };

  // Check win/loss conditions
  useEffect(() => {
    if (
      word &&
      word.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      setGameStatus("won");
    } else if (incorrectGuesses >= 10) {
      setGameStatus("lost");
    }
  }, [guessedLetters, incorrectGuesses, word]);

  // Render the game UI
  return (
    <Container className="game-container">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Hangman Game</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <WordDisplay word={word} guessedLetters={guessedLetters} />
        </Col>
      </Row>
      <Row className="align-items-center justify-content-md-center">
        <Col md={4} className="text-center">
          <GameInfo incorrectGuesses={incorrectGuesses} />
        </Col>
        <Col md={4} className="text-center">
          <HangmanFigure incorrectGuesses={incorrectGuesses} />
        </Col>
        <Col md={4} className="text-start">
          {gameStatus === "won" && (
            <Alert variant="success" className="custom-alert">
              🎉 Congratulations! You won!
            </Alert>
          )}
          {gameStatus === "lost" && (
            <Alert variant="danger" className="custom-alert">
              ❌ Sorry, you lose! The word was: <strong>{word}</strong>
            </Alert>
          )}
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Keyboard
            onGuess={handleGuess}
            guessedLetters={guessedLetters}
            word={word}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-3">
        <Col md="auto">
          <Button variant="primary" onClick={restartGame}>
            Restart Game
          </Button>
          <Button
            variant="info"
            onClick={() => setShowHelp(true)}
            className="ms-2"
          >
            Help
          </Button>
        </Col>
      </Row>
      <Modal show={showHelp} onHide={() => setShowHelp(false)}>
        <Modal.Header closeButton>
          <Modal.Title>How to Play Hangman</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Guess the hidden word one letter at a time. Each wrong guess brings
            the hangman closer to danger!
          </p>
          <ul>
            <li>
              You have <strong>10 chances</strong> (represented by 11 GIF
              stages).
            </li>
            <li>
              Click letters to make guesses — correct letters will reveal their
              place in the word.
            </li>
            <li>
              If you reveal the full word before your guesses run out, you win!
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHelp(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GameBoard;
