import React, { useState } from "react";

function TableComponent({ data, sortBy, itemsPerPage, onItemsPerPageChange }) {
  const [sortedData, setSortedData] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);

  // Calculate the number of pages
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const sortedDataSlice = sortedData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleSort = () => {
    const sorted = [...data];
    sorted.sort((a, b) => a[sortBy] - b[sortBy]);
    setSortedData(sorted);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <table>
        {/* ... Table header ... */}
        <tbody>
          {sortedDataSlice.map((item, index) => (
            <tr key={index}>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.age}</td>
              <td>{item.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={i === currentPage ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="items-per-page">
        <label>
          Show
          <select onChange={(e) => onItemsPerPageChange(e.target.value)}>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="100">100</option>
          </select>
          rows
        </label>
      </div>
    </div>
  );
}

export default TableComponent;
