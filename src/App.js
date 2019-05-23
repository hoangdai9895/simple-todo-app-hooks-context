import React, { useEffect, useContext } from "react";
import Input from "./Input";
import List from "./List";

import { TodosProvider } from "./context/TodoContext";
import useTodo from "./hooks/todo";

function App() {
  // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

  // const { todos } = useTodo(initialTodos);

  // useEffect(() => {
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  // });

  return (
    <div className="App container mt-2">
      <div className="jumbotron text-center p-4">
        <h1 className="display-4">Todo App!</h1>
        <p className="lead">Simple todo app using react hooks !!!!</p>
        <hr className="my-2" />
      </div>
      <TodosProvider>
        <Input />
        <List />
      </TodosProvider>
    </div>
  );
}

export default App;
