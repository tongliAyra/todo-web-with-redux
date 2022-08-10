import { configureStore } from "@reduxjs/toolkit";
import todoTasksSlice from "../components/todoTasksSlice";

const store = configureStore({
  reducer: todoTasksSlice,
});

export default store;
