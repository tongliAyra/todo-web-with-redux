import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    fetchTasks: (state, action) => action.payload,
    addTasks: (state, action) => state.push(action.payload),
    updateTask: (state, action) =>
      state.map((task) =>
        task.id === action.payload.id ? action.payload : task),
    deleteTask: (state, action) => {
      const taskIndex = state.findIndex((task) => task.id === action.payload)
      state.splice(taskIndex, 1)
    }
  }
}
)

export const { fetchTasks, addTasks, deleteTask, updateTask } = taskSlice.actions
export const allTasks = (state) => state.tasks
export default taskSlice.reducer
