import React, { useState, useContext } from "react";
import useInput from "./hooks/input";
import { TodosContext } from "./context/TodoContext";

const TodoItem = ({ id, task }) => {
  const [value, handleChange] = useInput("");
  const [isEdit, setIsEdit] = useState(false);
  console.log(task);
  // toglle edit form
  const { deleteTodo, editTodo } = useContext(TodosContext);

  const toggle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span>{task}</span>
        <div className="group-icon">
          <button className="btn btn-primary mr-2 " onClick={() => toggle()}>
            <i className="far fa-edit" />
          </button>
          <button
            className="btn btn-warning"
            onClick={() => {
              if (window.confirm("Are you sure")) {
                deleteTodo(id);
              }
            }}
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
      </li>
      {isEdit ? (
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            // value={task}
            defaultValue={task}
            onChange={handleChange}
          />
          <div className="input-group-prepend">
            <button className="btn btn-warning mr-3" onClick={() => toggle()}>
              <i className="fas fa-times" />
            </button>
            <button
              className="btn btn-success"
              onClick={() => {
                editTodo(id, value);
                toggle();
              }}
            >
              <i className="fas fa-check" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TodoItem;
