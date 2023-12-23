import React, { useState } from "react";
import "./App.css";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTodoList([...todoList, { text: todo }]);
      setTodo("");
    }
  };

  const handleMoveTodo = (index, fromList, toList) => {
    const updatedFromList = [...fromList];
    const movedTodo = updatedFromList.splice(index, 1);

    if (toList === doneList) {
      setDoneList([movedTodo[0], ...toList]); // Add to the top
    } else {
      setTodoList([...toList, movedTodo[0]]); // Add to the bottom
    }

    fromList === doneList
      ? setDoneList(updatedFromList)
      : setTodoList(updatedFromList);
  };

  return (
    <div className="App">
      <div>
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter your todo"
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <div>
          {todoList.map((item, index) => (
            <div key={index}>
              {item.text}
              <button onClick={() => handleMoveTodo(index, todoList, doneList)}>
                Move
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Done List</h2>
        <div>
          {doneList.map((item, index) => (
            <div key={index}>
              {item.text}
              <button onClick={() => handleMoveTodo(index, doneList, todoList)}>
                Move
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
