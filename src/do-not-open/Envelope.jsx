import React from "react";
import { useSpring, animated } from "react-spring";

const Envelope = ({ onOpen }) => {
  return (
    <>
      <div className="envelope">
        <div>
          <iframe
            // src="https://giphy.com/embed/rvCby1fIiQSMTeIrkR"
            src="https://giphy.com/embed/CuHO2q0lorhBieOEMp"
            // src="https://giphy.com/embed/L9EUxgj4PCwU6pZXsS"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button className="click-me" onClick={onOpen}>
        Click me
      </button>
    </>
  );
};

export default Envelope;
