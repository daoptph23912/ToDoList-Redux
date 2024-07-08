import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../Redux/Actions";

const ToDoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{}}>
            {todo.text}
            <button onClick={() => dispatch(toggleTodo(index))}>Toggle</button>
            <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;


