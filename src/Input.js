import React, { useContext } from "react";
import useInput from "./hooks/input";
import { TodosContext } from "./context/TodoContext";
const Input = () => {
  const [value, handleChange, reset] = useInput("");
  const { addTodo } = useContext(TodosContext);
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          What are your going to do ?
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="Something !!!!"
        onChange={handleChange}
        value={value}
        onKeyPress={e => {
          if (e.key === "Enter") {
            addTodo(value);
            reset();
          }
        }}
      />
      <button
        href=""
        className="btn btn-success ml-3"
        onClick={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
