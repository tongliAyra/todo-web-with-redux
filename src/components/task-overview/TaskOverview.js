import React from 'react'
import { ToDoTaskCount } from '../todo-task-count/ToDoTaskCount'
import { TaskFilter } from '../task-filter/TaskFilter'

export const TaskOverview = (
  { todoTaskCount,
    handleTaskFilter,
    completedTaskId,
    handleDeleteTask }) => {
  return (
    <div>
      <ToDoTaskCount todoTaskCount={ todoTaskCount }/>
      <TaskFilter
        handleTaskFilter={ handleTaskFilter }
        completedTaskId={ completedTaskId }
        handleDeletedCompletedTasks={ handleDeleteTask }
      />
    </div>
  )
}
