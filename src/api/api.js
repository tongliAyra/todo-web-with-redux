import axios from 'axios'

const URL = 'http://localhost:3001/tasks'

export const addTasksApi = async (taskName, isChecked) => {
  await axios.post(URL, { taskName, isChecked })
}

export const fetchTaskApi = async () => await axios.get(URL)

export const updateTasksApi = async (updateTask) => await axios.put(`${URL}/${updateTask.id}`, updateTask)

export const deleteTasksApi = async (id) => await axios.delete(`${URL}/${id}`)
