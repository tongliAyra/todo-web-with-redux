import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    taskName: "the first todo task!",
    isChecked: false,
  },
  {
    id: "1",
    taskName: "the second todo task!",
    isChecked: false,
  },
  {
    id: "2",
    taskName: "the finished todo task!",
    isChecked: true,
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
      prepare(taskName, newId) {
        return {
          payload: {
            id: newId,
            taskName,
            isChecked: false,
          },
        };
      },
    },
    checkedTask(state, action) {
      state[action.payload].isChecked = !state[action.payload].isChecked;
    },
    deleteTask(state) {},
  },
});

export const { addTask, checkedTask, deleteTask } = todoTasksSlice.actions;
export default todoTasksSlice.reducer;
