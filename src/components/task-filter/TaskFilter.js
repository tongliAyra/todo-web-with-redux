import React from 'react'
import { StyledTaskFilter } from '../styled-component/StyledTaskFilter'
import { StyledBtnWrapper } from '../styled-component/StyledBtnWrapper'
import { StyledButton } from '../styled-component/StyledButton'

const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'
const CLEAR_COMPLETED = 'Clear completed'

export const TaskFilter = (
  {
    handleTaskFilter,
    completedTaskId,
    handleDeletedTask
  }) => {
  const haveToDoTask = () => completedTaskId.length > 0

  return (
    <StyledTaskFilter>
      <StyledBtnWrapper>
        <StyledButton
          onClick={
            () => handleTaskFilter({
              showAllTask: true,
              showTodoTask: false,
              showCompletedTask: false
            })
          }>
          { ALL }
        </StyledButton>
        <StyledButton
          isAllBtn={ false }
          onClick={ () => handleTaskFilter({
            showAllTask: false,
            showTodoTask: true,
            showCompletedTask: false
          })
          }>
          { ACTIVE }
        </StyledButton>
        <StyledButton
          isAllBtn={ false }
          onClick={ () => handleTaskFilter({
            showAllTask: false,
            showTodoTask: false,
            showCompletedTask: true
          })
          }>
          { COMPLETED }
        </StyledButton>
      </StyledBtnWrapper>
      { haveToDoTask() &&
        <StyledButton
          onClick={ () => completedTaskId.map((id) => handleDeletedTask(id))
          }>
          { CLEAR_COMPLETED }
        </StyledButton> }
    </StyledTaskFilter>
  )
}
