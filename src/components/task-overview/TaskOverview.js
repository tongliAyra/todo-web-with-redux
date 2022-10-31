import React from 'react'
import { ToDoTaskCount } from '../todo-task-count/ToDoTaskCount'
import { TaskFilter } from '../task-filter/TaskFilter'

export const TaskOverview = ({ todoTaskCount, handleTaskFilter }) => {
  return (
    <div>
      <ToDoTaskCount todoTaskCount={ todoTaskCount }/>
      <TaskFilter handleTaskFilter={ handleTaskFilter }/>
    </div>
  )
}
