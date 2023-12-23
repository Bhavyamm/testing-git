import React, { useEffect, useState } from "react";
import axios from "axios";

async function* fetchDataGenerator() {
  let index = 0;

  while (true) {
    try {
      const response = await axios.get(`https://api.example.com/data/${index}`);
      yield response.data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      index++;
      // Introduce a delay before fetching the next update (e.g., every 5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

function AsyncGeneratorDemo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const generator = fetchDataGenerator();

      for await (const newData of generator) {
        setData((prevData) => [...prevData, newData]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Real-time Data Dashboard</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AsyncGeneratorDemo;
