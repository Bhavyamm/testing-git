import React, { useState } from "react";
import "./scared-button.css";

const getRandomPosition = () => {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 40;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  return { left: randomX, top: randomY };
};

const ScaredButton = () => {
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });

  const handleButtonClick = () => {
    const newPosition = getRandomPosition();
    setButtonPosition(newPosition);
  };

  return (
    <div className="scared-button">
      <button
        style={{ position: "absolute", ...buttonPosition }}
        onClick={handleButtonClick}
      >
        Move Button
      </button>
    </div>
  );
};

export default ScaredButton;
