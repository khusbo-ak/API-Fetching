"use client";

import React, { useState } from "react";
const Todos = () => {
  const [todos, setTodos] = useState([]);

  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.error("Errors:", error);
    }
  }
  return (
    <div className="bg-teal-950 text-white px-2 shadow-md hover:bg-teal-900">
      <button onClick={getData}> TODOs</button>
      {todos.length > 0 &&
        todos.map((todos: any) => (
          <div
            key={todos.id}
            className="bg-white text-black m-4 p-4 border shadow-md"
          >
            <h2 className="font-bold text-lg mb-2">{todos.title}</h2>
            <p>{todos.completed ? "Completed" : "Pending"}</p>
          </div>
        ))}
    </div>
  );
};
export default Todos;
