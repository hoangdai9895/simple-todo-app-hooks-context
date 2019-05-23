import { useState } from "react";
import uuid from "uuid/v4";

export default useTodo => {
    const [todos, setTodos] = useState(useTodo);
    return {
        todos,
        addTodo: todo => {
            setTodos([...todos, { id: uuid(), task: todo, completed: false }]);
            // reset();
        },
        deleteTodo: id => {
            const updateTodo = todos.filter(todo => todo.id !== id);
            setTodos(updateTodo);
        },
        editTodo: (id, newtask) => {
            const updateTodo = todos.map(todo => {
                return todo.id === id ? {...todo, task: newtask } : todo;
            });
            setTodos(updateTodo);
        }
    };
};