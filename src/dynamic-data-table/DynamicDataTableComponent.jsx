import React, { useState } from "react";
import TableComponent from "./TableComponent";

const jsonData = [
  {
    first_name: "John",
    last_name: "Doe",
    age: 25,
    marks: 85,
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    age: 28,
    marks: 92,
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    age: 22,
    marks: 76,
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    age: 24,
    marks: 89,
  },
  {
    first_name: "William",
    last_name: "Davis",
    age: 30,
    marks: 78,
  },
  {
    first_name: "Sophia",
    last_name: "Wilson",
    age: 27,
    marks: 95,
  },
  {
    first_name: "James",
    last_name: "Anderson",
    age: 29,
    marks: 83,
  },
  {
    first_name: "Olivia",
    last_name: "Martinez",
    age: 26,
    marks: 91,
  },
  {
    first_name: "Daniel",
    last_name: "Garcia",
    age: 23,
    marks: 70,
  },
  {
    first_name: "Ava",
    last_name: "Taylor",
    age: 31,
    marks: 88,
  },
  {
    first_name: "John",
    last_name: "Doe",
    age: 25,
    marks: 85,
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    age: 28,
    marks: 92,
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    age: 22,
    marks: 76,
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    age: 24,
    marks: 89,
  },
  {
    first_name: "William",
    last_name: "Davis",
    age: 30,
    marks: 78,
  },
  {
    first_name: "Sophia",
    last_name: "Wilson",
    age: 27,
    marks: 95,
  },
  {
    first_name: "James",
    last_name: "Anderson",
    age: 29,
    marks: 83,
  },
  {
    first_name: "Olivia",
    last_name: "Martinez",
    age: 26,
    marks: 91,
  },
  {
    first_name: "Daniel",
    last_name: "Garcia",
    age: 23,
    marks: 70,
  },
  {
    first_name: "Ava",
    last_name: "Taylor",
    age: 31,
    marks: 88,
  },
  {
    first_name: "John",
    last_name: "Doe",
    age: 25,
    marks: 85,
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    age: 28,
    marks: 92,
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    age: 22,
    marks: 76,
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    age: 24,
    marks: 89,
  },
  {
    first_name: "William",
    last_name: "Davis",
    age: 30,
    marks: 78,
  },
  {
    first_name: "Sophia",
    last_name: "Wilson",
    age: 27,
    marks: 95,
  },
  {
    first_name: "James",
    last_name: "Anderson",
    age: 29,
    marks: 83,
  },
  {
    first_name: "Olivia",
    last_name: "Martinez",
    age: 26,
    marks: 91,
  },
  {
    first_name: "Daniel",
    last_name: "Garcia",
    age: 23,
    marks: 70,
  },
  {
    first_name: "Ava",
    last_name: "Taylor",
    age: 31,
    marks: 88,
  },
  {
    first_name: "John",
    last_name: "Doe",
    age: 25,
    marks: 85,
  },
  {
    first_name: "Alice",
    last_name: "Smith",
    age: 28,
    marks: 92,
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    age: 22,
    marks: 76,
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    age: 24,
    marks: 89,
  },
  {
    first_name: "William",
    last_name: "Davis",
    age: 30,
    marks: 78,
  },
  {
    first_name: "Sophia",
    last_name: "Wilson",
    age: 27,
    marks: 95,
  },
  {
    first_name: "James",
    last_name: "Anderson",
    age: 29,
    marks: 83,
  },
  {
    first_name: "Olivia",
    last_name: "Martinez",
    age: 26,
    marks: 91,
  },
  {
    first_name: "Daniel",
    last_name: "Garcia",
    age: 23,
    marks: 70,
  },
  {
    first_name: "Ava",
    last_name: "Taylor",
    age: 31,
    marks: 88,
  },
];

function DynamicDataTableComponent() {
  const [sortBy, setSortBy] = useState("age");
  const [itemsPerPage, setItemsPerPage] = useState(2); // Initial number of items per page.

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(parseInt(value));
  };

  return (
    <div>
      <h1>Sorting Table App</h1>
      <label>
        Sort by:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="age">Age</option>
          <option value="marks">Marks</option>
        </select>
      </label>
      <TableComponent
        data={jsonData}
        sortBy={sortBy}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}

export default DynamicDataTableComponent;
