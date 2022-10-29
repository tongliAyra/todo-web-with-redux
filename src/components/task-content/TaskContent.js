import React, { useState } from 'react'
import { TaskInput } from '../task-input/TaskInput'
import { TaskOverview } from '../task-overview/TaskOverview'

export const TaskContent = () => {
  const [taskList, setTaskList] = useState([])
  const [taskId, setTaskId] = useState(taskList.length + 1)

  const handleAddTask = ({ taskName, isChecked }) => {
    const newTaskList = taskList
    const newSingleTask = { id: taskId, taskName, isChecked }
    newTaskList.push(newSingleTask)
    setTaskId(() => taskId + 1)
    setTaskList(newTaskList)
  }

  return (
    <div>
      <TaskInput handleAddTask={ handleAddTask } />
      <TaskOverview/>
    </div>
  )
}
