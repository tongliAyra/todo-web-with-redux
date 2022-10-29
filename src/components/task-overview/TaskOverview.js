import React from 'react'
import { ToDoTaskCount } from '../todo-task-count/ToDoTaskCount'
import { TaskFilter } from '../task-filter/TaskFilter'

export const TaskOverview = () => {
  return (
    <div>
      <ToDoTaskCount/>
      <TaskFilter/>
    </div>
  )
}
