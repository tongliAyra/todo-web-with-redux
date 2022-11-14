import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 14px;
    color: #0000008c;
    margin-left: 10px;
    border: none;
    background-color: white;
    cursor: pointer;
    
    &:hover{
    border: 1px solid rgba(175, 47, 47, 0.2);
    border-radius: 4px;    
    }
    
    &:focus{
    border: 1px solid #e2909d;
    border-radius: 4px;
    }
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

const StyledBtnWrapper = styled.div`
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
