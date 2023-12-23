import React, { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error, errorInfo) => {
      // You can log the error or perform other actions here
      console.error(error, errorInfo, "error");
      setHasError(true);
    };

    // Set up the error handler
    window.addEventListener("error", handleError);

    // Clean up the error handler when the component unmounts
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
}

export default ErrorBoundary;
