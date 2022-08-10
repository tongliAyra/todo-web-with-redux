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
      prepare(id, taskName) {
        return {
          payload: {
            id: "11",
            taskName,
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

export const taskActions = todoTasksSlice.actions;
export default todoTasksSlice.reducer;
