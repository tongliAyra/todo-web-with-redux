import React from 'react'
import { ToDoTaskCount } from '../todo-task-count/ToDoTaskCount'
import { TaskFilter } from '../task-filter/TaskFilter'
import { StyledTaskOverview } from '../styled-component/StyledTaskOverview'

export const TaskOverview = (
  { todoTaskCount,
    handleTaskFilter,
    completedTaskId,
    handleDeleteTask }) => {
  return (
    <StyledTaskOverview>
      <ToDoTaskCount todoTaskCount={ todoTaskCount }/>
      <TaskFilter
        handleTaskFilter={ handleTaskFilter }
        completedTaskId={ completedTaskId }
        handleDeletedTask={ handleDeleteTask }
      />
    </StyledTaskOverview>
  )
}
