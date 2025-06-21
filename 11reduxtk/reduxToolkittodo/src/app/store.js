// configure store.
// now make reducer. or called slies

// make feature folder for reducer and one more feature name folder here todo.
// make todo reducer name todoSlice.js . slice.js is naming convertion.

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
