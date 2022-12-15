import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    fetchTasks: (state, action) => action.payload,
    addTasks: (state, action) => {
      state.push(action.payload)
      return state
    },
    updateTask: (state, action) =>
      state.map((task) =>
        task.id === action.payload.id ? action.payload : task),
    deleteTask: (state, action) =>
      state.filter(task => task.id !== action.payload)
  }
}
)

export const { fetchTasks, addTasks, deleteTask, updateTask } = taskSlice.actions
export const allTasks = (state) => state.tasks
export default taskSlice.reducer
