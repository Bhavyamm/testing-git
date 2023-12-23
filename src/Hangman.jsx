import React, { useState } from "react";

const Hangman = () => {
  const [word, setWord] = useState("hangman");
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [attempts, setAttempts] = useState(6);

  const handleGuess = (letter) => {
    if (!guessedLetters.has(letter)) {
      setGuessedLetters(new Set(guessedLetters.add(letter)));
      setAttempts(attempts - (word.includes(letter) ? 0 : 1));
    }
  };

  const isGameWon = () => {
    return word.split("").every((letter) => guessedLetters.has(letter));
  };

  return (
    <div>
      <h1>Hangman Game</h1>
      <div className="word">
        {word.split("").map((letter, index) => (
          <span key={index}>{guessedLetters.has(letter) ? letter : "_"}</span>
        ))}
      </div>
      <div className="attempts">Attempts remaining: {attempts}</div>
      <div className="keyboard">
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <button
            key={letter}
            disabled={guessedLetters.has(letter) || attempts <= 0}
            onClick={() => handleGuess(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      {isGameWon() && <div className="win-message">You win!</div>}
      {attempts <= 0 && <div className="lose-message">You lose!</div>}
    </div>
  );
};

export default Hangman;
