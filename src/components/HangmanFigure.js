// Component to display the hangman figure based on incorrect guesses
const HangmanFigure = ({ incorrectGuesses }) => {
  const stageNumber = Math.min(incorrectGuesses + 1, 12);
  const imageSrc = process.env.PUBLIC_URL + `/state${stageNumber}.GIF`;
  return (
    <div className="hangman-figure">
      <img src={imageSrc} alt={`Hangman stage ${stageNumber}`} className="img-fluid" />
    </div>
  );
};

export default HangmanFigure;
