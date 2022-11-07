import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
  display: flex;
  gap: 10px;
  height: 58px;
  align-items: center;
  border-bottom: 0.3px solid lightgray;
  padding-left: 10px;
`

const StyledListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`

const StyledDeleted = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 15px
`

const StyledCheckBox = styled.input`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid lightgray;
`

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
`

export const TaskList = ({ taskList, handleUpdateTask, handleDeleteTask }) => {

  const sortedTasks = taskList.sort((a, b) => b.id - a.id)

  return (
    <StyledListWrapper>
      { sortedTasks.map((taskList) => (
        <StyledList key={ taskList.id }>
          <label htmlFor="check-box" >
            <StyledCheckBox
              type='check-box'
              checked={ taskList.isChecked }
              onChange={ () => handleUpdateTask(
                { id: taskList.id,
                  taskName: taskList.taskName,
                  isChecked: !taskList.isChecked }) }
            />
            <CheckMark/>
          </label>
          <span
            id={ taskList.id }
            contentEditable={ true }
            suppressContentEditableWarning={ true }
          >
            { taskList.taskName }
          </span>
          <StyledDeleted
            className="delete-btn"
            onClick={ () => handleDeleteTask(taskList.id) }
          >
            <CloseOutlined
              style={ { color: 'rgb(175 47 47 / 29%)' } }
              size='middle'
            />
          </StyledDeleted>
        </StyledList>
      )) }
    </StyledListWrapper>
  )
}
