import React from "react";

import TodoItem from "./TodoItem";
const List = ({ todos, deleteTodo, editTodo }) => {
  // console.log(todos);
  if (todos.length) {
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem
            {...todo}
            deleteTodo={deleteTodo}
            key={todo.id}
            editTodo={editTodo}
          />
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default List;
