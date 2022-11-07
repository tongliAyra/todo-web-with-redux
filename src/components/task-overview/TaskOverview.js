import React from 'react'
import { ToDoTaskCount } from '../todo-task-count/ToDoTaskCount'
import { TaskFilter } from '../task-filter/TaskFilter'
import styled from 'styled-components'

const StyledTaskOverview = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;
  align-content: flex-end;
`

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
