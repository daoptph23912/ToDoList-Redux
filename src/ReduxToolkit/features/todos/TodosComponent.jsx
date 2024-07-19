import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removedTodo, toggleTodo } from "./todosSlices";

const TodosComponent = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          text,
          completed: false,
        })
      );
      setText("");
    }
  };
  return (
    <>
      <h1>Redux Toolkit - Todo List</h1>
      <input
        value={text}
        type={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                color: todo.completed ? "red" : "black",
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removedTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodosComponent;
