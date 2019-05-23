import React, { useEffect } from "react";
import Input from "./Input";
import List from "./List";

import useTodo from "./hooks/todo";

function App() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  const { todos, addTodo, deleteTodo, editTodo } = useTodo(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  return (
    <div className="App container mt-2">
      <div className="jumbotron text-center p-4">
        <h1 className="display-4">Todo App!</h1>
        <p className="lead">Simple todo app using react hooks !!!!</p>
        <hr className="my-2" />
      </div>
      {/* input */}
      <Input addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
