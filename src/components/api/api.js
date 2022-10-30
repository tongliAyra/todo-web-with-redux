import axios from 'axios'

const URL = 'http://localhost:3001/tasks'

export const addTasks = async (taskName, isChecked) => {
  await axios.post(URL, { taskName, isChecked })
}

export const fetchTasks = async () => await axios.get(URL)

export const updateTasks = async (updateTask) => await axios.put(`${URL}/${updateTask.id}`, updateTask)


export const deleteTasks = async (id) => await axios.delete(`${URL}/${id}`)
