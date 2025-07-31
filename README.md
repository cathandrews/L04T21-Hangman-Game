
# Hangman Game (React)

This project is a classic **Hangman word-guessing game** built with **React** and **React-Bootstrap**, using a custom word list loaded from a local `dictionary.txt` file.

---

## 🎮 How to Play

- A secret word is randomly selected.
- Click the letter buttons to guess letters one at a time.
- Correct guesses will be revealed in the word.
- Incorrect guesses will advance the hangman figure.
- You have **12 incorrect guesses** before the game ends.
- Win the game by guessing the full word before reaching the final stage!

A help button is available at all times to show the rules of the game.

---

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or newer recommended)
- npm (Node Package Manager)

### Installation

1. **Clone this repository** or download the ZIP.
2. **Navigate to the project directory**:

```bash
cd your-project-folder
```

3. **Install dependencies**:

```bash
npm install
```

4. **Start the development server**:

```bash
npm start
```

Then open your browser and go to [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Project Structure

```text
public/
├── dictionary.txt           # Word source for the game
├── state1.GIF - state12.GIF # Hangman stage images

src/
├── components/
│   ├── GameBoard.js         # Main game logic and UI
│   ├── HangmanFigure.js     # Displays hangman stage image
│   ├── Keyboard.js          # Alphabet buttons
│   ├── WordDisplay.js       # Displays word with guessed letters
│   └── GameInfo.js          # Optional info (e.g., guesses left)
├── App.js
├── App.css
└── GameBoard.css
```

---

## ⚙️ Features & Technologies

- React with functional components and hooks (`useState`, `useEffect`)
- Dynamic state management
- Responsive and clean UI with [React-Bootstrap](https://react-bootstrap.github.io/)
- Uses `.map()` with unique `key` props to render keyboard buttons
- Synced game state across multiple components
- Restart button to generate a new word
- Help modal with game rules
- Custom styling using `.css` files
- Hangman stages displayed with `.GIF` images

---

## 📦 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page reloads automatically when you make edits.

### `npm run build`

Builds the app for production to the `build/` folder.  
It optimizes the build for the best performance.

---

## 🧠 Learn More

- [React documentation](https://reactjs.org/)
- [React Bootstrap documentation](https://react-bootstrap.github.io/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs)

---

## ✅ Requirements Checklist

- [x] Created with Create React App
- [x] Uses at least 4 different styled and interactive components
- [x] Renders components using `.map()` with unique keys
- [x] Game state is updated in response to user interaction
- [x] Game state is shared across multiple components
- [x] Game can be restarted
- [x] Player receives win/loss feedback
- [x] Help button explains rules
- [x] Responsive and intuitive UI
- [x] Dictionary loaded from `dictionary.txt`
- [x] 12-stage hangman GIFs used
- [x] App runs with `npm start`

---

© 2025 Hangman Game | Built with ❤️ using React
