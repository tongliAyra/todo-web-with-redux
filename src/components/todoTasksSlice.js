import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


// const initialState = [
//   {
//     id: "0",
//     taskName: "0-the first todo task!",
//     isChecked: false,
//   },
//   {
//     id: "1",
//     taskName: "1-the second todo task!",
//     isChecked: false,
//   },
//   {
//     id: "2",
//     taskName: "2-the finished todo task!",
//     isChecked: true,
//   },
// ];

const initialState = {
  tasks:[],
  status: 'idle',
  error: null
}

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
    builder.addCase(fetchTasks.pending, (state,action)=>{
      state.status = 'loading'
    })
        .addCase(fetchTasks.fulfilled,(state,action)=>{
          state.status = 'succeeded'
          state.tasks = state.tasks.concat(action.payload)
        })
        .addCase(fetchTasks.rejected,(state,action)=>{
          state.status = 'failed'
          state.error = action.error.message
        })
        .addCase(addTasks.fulfilled,(state,action)=>{
          state.tasks.push(action.payload)
        })
        .addCase(updateTasks.fulfilled,(state,action)=>{
          const{isChecked, taskName,id} = action.payload
          state.tasks[id] = {
            id:id,
            isChecked : isChecked,
            taskName : taskName,
          }
        })
        .addCase(deleteTasks.fulfilled,(state,action)=>{
          state.tasks.splice(action.payload,1)
        })
  }
});

export default todoTasksSlice.reducer;
