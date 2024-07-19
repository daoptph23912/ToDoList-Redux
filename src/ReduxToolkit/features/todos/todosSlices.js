import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers:{
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removedTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
  }
});

export const { addTodo, toggleTodo, removedTodo } = todosSlice.actions;
// export default todosSlice.reducer;
export const reducersss = todosSlice.reducer;
