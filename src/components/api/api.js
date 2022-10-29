import axios from 'axios'

const URL = 'http://localhost:3001/tasks'

export const addTasks = async (taskName, isChecked) => {
  await axios.post(URL, { taskName, isChecked }).catch(err => console.log(err))
}

export const fetchTasks = async () => await axios.get(URL)

export const updateTasks = async (updateTask) => {
  const response = await axios.put(`${URL}/${updateTask.id}`, updateTask)
  return response.data
}

export const deleteTasks = async (id) => {
  const response = await axios.delete(`${URL}/${id}`)
  return response.data
}
