import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 14px;
    color: #0000008c;
    margin-left: 10px;
    border: 1px solid #e2909d;
    border-radius: 4px;
    background-color: white;
`
const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'
const CLEAR_COMPLETED = 'Clear completed'

const StyledTaskFilter = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 10px;
`

const StyledBtns = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`

export const TaskFilter = (
  {
    handleTaskFilter,
    completedTaskId,
    handleDeletedTask
  }) => {

  const haveToDoTask = () => completedTaskId.length > 0

  return (
    <StyledTaskFilter>
      <StyledBtns>
        <StyledButton
          onClick={ () => handleTaskFilter({
            showAllTask: true,
            showTodoTask: false,
            showCompletedTask: false
          })
          }>
          { ALL }
        </StyledButton>
        <StyledButton
          onClick={ () => handleTaskFilter({
            showAllTask: false,
            showTodoTask: true,
            showCompletedTask: false
          })
          }>
          { ACTIVE }
        </StyledButton>
        <StyledButton onClick={ () => handleTaskFilter({
          showAllTask: false,
          showTodoTask: false,
          showCompletedTask: true
        })
        }>
          { COMPLETED }
        </StyledButton>
      </StyledBtns>
      { haveToDoTask() &&
        <StyledButton
          onClick={ () => completedTaskId.map((id) => handleDeletedTask(id))
          }>
          { CLEAR_COMPLETED }
        </StyledButton> }
    </StyledTaskFilter>
  )
}
