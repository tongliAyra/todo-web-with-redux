import { configureStore } from '@reduxjs/toolkit'
import todoTasksReducer from '../components/api/todoTasksSlice'

const store = configureStore({
  reducer: { tasks: todoTasksReducer }
})

export default store
