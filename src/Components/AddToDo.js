import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Actions";

const AddToDo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};
export default AddToDo;
