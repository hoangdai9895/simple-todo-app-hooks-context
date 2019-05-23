import React, { createContext } from "react";
import useTodo from "../hooks/todo";

const defaultTodo = [
  { id: 1, task: "do some thing", completed: false },
  { id: 2, task: "do some thing diffrent", completed: false }
];

// const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodo();
  return (
    <TodosContext.Provider value={todoStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
