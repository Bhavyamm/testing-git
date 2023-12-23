import "./do-not-open.css";
import { useState } from "react";
import Envelope from "./Envelope";
import Letter from "./Letter";

function DoNotOpen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="do-not-open">
      {!isOpen && <Envelope onOpen={() => setIsOpen(!isOpen)} />}
      {isOpen && <Letter />}
    </div>
  );
}

export default DoNotOpen;
