import { configureStore } from "@reduxjs/toolkit";
import todoTasksReducer from "../components/todoTasksSlice";

const store = configureStore({
  reducer: { tasks: todoTasksReducer },
});

export default store;
