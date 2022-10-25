import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
const URL = "http://localhost:3001/tasks";
const SLICE_NAME = "tasks";
const FETCH_TASKS = "tasks/fetchTasks";
const ADD_TASKS = "tasks/addTasks";
const UPDATE_TASKS = "tasks/updateTasks";
const DELETE_TASKS = "tasks/deleteTasks";

export const fetchTasks = createAsyncThunk(FETCH_TASKS, async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const addTasks = createAsyncThunk(ADD_TASKS, async (initialTask) => {
  const response = await axios.post(URL, initialTask);
  return response.data;
});

export const updateTasks = createAsyncThunk(
  UPDATE_TASKS,
  async (updateTask) => {
    const response = await axios.put(`${URL}/${updateTask.id}`, updateTask);
    return response.data;
  }
);

export const deleteTasks = createAsyncThunk(DELETE_TASKS, async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
});

const todoTasksSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateTasks.fulfilled, (state, action) => {
        return state.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        const taskIndex = state.findIndex((task) => task.id === action.payload);
        state.splice(taskIndex, 1);
      });
  },
});

export const allTasks = (state) => state.tasks;
export default todoTasksSlice.reducer;
