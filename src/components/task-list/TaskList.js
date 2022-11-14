import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'
import './style.css'

const StyledList = styled.li`
  display: flex;
  gap: 10px;
  height: 58px;
  align-items: center;
  border-bottom: 0.3px solid lightgray;
  padding-left: 10px;
  cursor: pointer;
  
  .delete-btn-wrapper{
  opacity: 0;
  }
 
  &:hover{
  .delete-btn-wrapper{
  opacity: 1;
  }
`

const StyledListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`

const StyledDeleted = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 15px;
   .delete-btn{
   color: rgb(175 47 47 / 50%)
  }
`

export const TaskList = ({ taskList, handleUpdateTask, handleDeleteTask }) => {

  const sortedTasks = taskList.sort((a, b) => b.id - a.id)

  return (
    <StyledListWrapper>
      { sortedTasks.map((taskList) => (
        <StyledList key={ taskList.id }>
          <label htmlFor="check"/>
          <input
            type='checkbox'
            id='check'
            checked={ taskList.isChecked }
            onChange={ () => handleUpdateTask(
              { id: taskList.id,
                taskName: taskList.taskName,
                isChecked: !taskList.isChecked }) }
          />
          <span
            id={ taskList.id }
            style={ taskList.isChecked ?
              { textDecoration: 'line-through',
                color: 'lightgray',
                fontSize: '20px'
              }:
              {
                color: 'gray',
                fontSize: '20px'
              } }
            // contentEditable={ true }
            // suppressContentEditableWarning={ true }
          >
            { taskList.taskName }
          </span>
          <StyledDeleted
            className='delete-btn-wrapper'
          >
            <CloseOutlined
              onClick={ () => handleDeleteTask(taskList.id) }
              className="delete-btn"
              size='middle'
            />
          </StyledDeleted>
        </StyledList>
      )) }
    </StyledListWrapper>
  )
}
