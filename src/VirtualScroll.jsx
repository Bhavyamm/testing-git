import React, { useState, useEffect } from "react";

const VirtualScroll = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemHeight = 50;
  const containerHeight = 400;
  const totalItems = 1000;

  useEffect(() => {
    const handleScroll = () => {
      const offset = Math.floor(scrollContainer.scrollTop / itemHeight);
      const start = Math.max(0, offset);
      const end = Math.min(
        start + Math.ceil(containerHeight / itemHeight),
        totalItems
      );
      setVisibleItems(
        Array.from(
          { length: end - start },
          (_, index) => `Item ${start + index + 1}`
        )
      );
    };

    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize visible items
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      id="scroll-container"
      style={{ height: `${containerHeight}px`, overflow: "auto" }}
    >
      <div style={{ height: `${totalItems * itemHeight}px` }}>
        {visibleItems.map((item, index) => (
          <div key={index} style={{ height: `${itemHeight}px` }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualScroll;
