import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "../features/todos/todosSlices";
import { reducersss } from "../features/todos/todosSlices";

export const store = configureStore({
  reducer: {
    todos: reducersss,
  },
});
export default store
