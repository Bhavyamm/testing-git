import React, { useState } from "react";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleBoldClick = () => {
    document.execCommand("bold", false, null);
  };

  const handleItalicClick = () => {
    document.execCommand("italic", false, null);
  };

  const handleContentChange = (e) => {
    setContent(e.target.innerHTML);
  };

  return (
    <div>
      <h2>Text Editor</h2>
      <div>
        <button onClick={handleBoldClick}>Bold</button>
        <button onClick={handleItalicClick}>Italic</button>
      </div>
      <div
        contentEditable
        onInput={handleContentChange}
        style={{
          border: "1px solid #ccc",
          minHeight: "200px",
          padding: "10px",
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default TextEditor;
