import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    taskName: "the first todo task!",
    isChecked: false,
  },
  {
    id: "2",
    taskName: "the second todo task!",
    isChecked: false,
  },
];
const todoTasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(taskName) {
        return {
          payload: {
            id: initialState.length + 1,
            taskName,
            isChecked: false,
          },
        };
      },
    },
    completedTask(state) {
      state.isChecked = true;
    },
    deleteTask(state) {},
  },
});

export const { addTask, completedTask, deleteTask } = todoTasksSlice.actions;
export default todoTasksSlice.reducer;
