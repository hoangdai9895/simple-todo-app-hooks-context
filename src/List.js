import React, { useContext } from "react";
import { TodosContext } from "./context/TodoContext";
import TodoItem from "./TodoItem";
const List = () => {
  const { todos } = useContext(TodosContext);
  if (todos.length) {
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem {...todo} key={todo.id} />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default List;
