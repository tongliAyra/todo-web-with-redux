import React, { useEffect, useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskOverview } from '../task-overview/TaskOverview'
import { TaskList } from '../task-list/TaskList'
import { addTasks, fetchTasks } from '../api/api'

export const TaskContent = () => {
  const [taskList, setTaskList] = useState([])

  const fetchTask = async () => {
    const response = await fetchTasks().then(res => res.data)
    setTaskList(response)
  }

  useEffect(() => {
    fetchTask()
  },[])

  const handleAddTask = async ({ taskName, isChecked }) => {
    await addTasks(taskName, isChecked)
    fetchTask()
  }

  return (
    <div>
      <TaskInput handleAddTask={ handleAddTask } />
      <TaskList taskList={ taskList }/>
      <TaskOverview/>
    </div>
  )
}
