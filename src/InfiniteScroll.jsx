import React, { useState, useEffect } from "react";

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const uri = `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20`;

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    if (loading) return;

    setLoading(true);

    fetch(uri)
      .then((response) => response.json())
      .then((data) => {
        setItems((prevItems) => [...prevItems, ...data]);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
      });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.scrollHeight
    ) {
      fetchItems();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default InfiniteScroll;
