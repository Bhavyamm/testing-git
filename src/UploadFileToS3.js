import React, { useState } from "react";

function UploadFileToS3() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadScript = () => {
    import("./uploadToS3.sh")
      .then((scriptModule) => {
        console.log(scriptModule, "script module");
        setScriptLoaded(true);
      })
      .catch((error) => {
        console.error("Error loading script:", error);
      });
  };

  return (
    <div>
      <button onClick={loadScript}>Run Script</button>
      {scriptLoaded && <p>Script has been loaded!</p>}
    </div>
  );
}

export default UploadFileToS3;
