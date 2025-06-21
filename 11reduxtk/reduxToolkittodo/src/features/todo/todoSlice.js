import { createSlice, nanoid } from "@reduxjs/toolkit";
// nanoid for unique id genratoins.

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todos) => todos.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((prevtodo) =>
        prevtodo.id === action.payload.id
          ? { ...prevtodo, ...action.payload }
          : prevtodo
      );
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
