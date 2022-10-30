import React, { useEffect, useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskList } from '../task-list/TaskList'
import { addTasks, deleteTasks, fetchTasks, updateTasks } from '../api/api'
import { TaskOverview } from '../task-overview/TaskOverview'

export const TaskContent = () => {
  const [taskList, setTaskList] = useState([])

  const fetchTask = async () => {
    const response = await fetchTasks().then(res => res.data)
    setTaskList(response)
  }

  const handleAddTask = async ({ taskName, isChecked }) => {
    await addTasks(taskName, isChecked)
    fetchTask()
  }

  const handleUpdateTask = async ({ id, taskName, isChecked }) => {
    await updateTasks({ id, taskName, isChecked })
    fetchTasks()
  }

  const handleDeleteTask = async (id) => {
    await deleteTasks(id)
    fetchTasks()
  }

  useEffect(() => {
    fetchTask()
  },[])

  const todoTaskCount = taskList.filter((task) => task.isChecked === false).length

  return (
    <div>
      <TaskInput handleAddTask={ handleAddTask } />
      <TaskList
        taskList={ taskList }
        handleUpdateTask={ handleUpdateTask }
        handleDeleteTask={ handleDeleteTask }
      />
      <TaskOverview todoTaskCount={ todoTaskCount }/>
    </div>
  )
}
