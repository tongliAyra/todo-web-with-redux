import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = []

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async ()=>{
  const response = await axios.get('http://localhost:3001/tasks')
  return response.data;
})

export const addTasks = createAsyncThunk('tasks/addTasks',async (initialTask)=>{
  const response = await axios.post('http://localhost:3001/tasks',initialTask)
  return response.data
})

export const updateTasks = createAsyncThunk('tasks/updateTasks',async (updateTask)=>{
  const response = await axios.put(`http://localhost:3001/tasks/${updateTask.id}`,updateTask)
  return response.data
})

export const deleteTasks = createAsyncThunk('tasks/deleteTasks',async(id)=>{
  const response = await axios.delete(`http://localhost:3001/tasks/${id}`)
  return response.data
})

const todoTasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
        .addCase(fetchTasks.fulfilled,(state,action)=>{
            return action.payload
        })
        .addCase(addTasks.fulfilled,(state,action)=>{
           state.push(action.payload)
        })
        .addCase(updateTasks.fulfilled,(state,action)=>{
           return state.map((task) => task.id===action.payload.id ? action.payload : task)
        })
        .addCase(deleteTasks.fulfilled,(state,action)=>{
            const taskIndex = state.findIndex((task)=> task.id === action.payload)
            state.splice(taskIndex,1)
        })
  }
});

export const allTasks = (state)=> state.tasks;
export default todoTasksSlice.reducer;
