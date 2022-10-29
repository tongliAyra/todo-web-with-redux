import { useSelector } from 'react-redux'
import React from 'react'
import { TaskList } from '../task-list/TaskList'
import { allTasks } from '../api/todoTasksSlice'
import { TaskInput } from '../task-input/TaskInput'
import { TaskOverview } from '../task-overview/TaskOverview'

export const TaskContent = () => {
  const tasks = useSelector(allTasks)
  const todoTasks = useSelector(() => {
    return tasks.filter((task) => !task.isChecked)
  })

  return ( <div>
    <TaskInput />
    <TaskList tasks={ todoTasks } />
    <TaskOverview/>
  </div>
  )
}
