import { useState } from "react";
import uuid from "uuid/v4";

export default useTodo => {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
    const [todos, setTodos] = useState(initialTodos);
    const setLocal = todos => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    };

    return {
        todos,
        addTodo: todo => {
            setTodos([...todos, { id: uuid(), task: todo, completed: false }]);
            setLocal(todos.concat({ id: uuid(), task: todo, completed: false }));
        },
        deleteTodo: id => {
            const updateTodo = todos.filter(todo => todo.id !== id);
            setTodos(updateTodo);
            setLocal(updateTodo);
        },
        editTodo: (id, newtask) => {
            const updateTodo = todos.map(todo => {
                return todo.id === id ? {...todo, task: newtask } : todo;
            });
            setTodos(updateTodo);
            setLocal(updateTodo);
        }
    };
};