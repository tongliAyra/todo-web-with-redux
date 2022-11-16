import React, { useState } from 'react'
import { StyledList } from '../styled-component/StyledList'
import { StyledInput } from '../styled-component/StyledInput'
import { StyledTaskName } from '../styled-component/StyledTaskName'
import { StyledEditInput } from '../styled-component/StyledEditInput'
import { StyledDeleted } from '../styled-component/StyledDeleted'
import { CloseOutlined } from '@ant-design/icons'

export const SingleTaskList = ({ taskList, handleUpdateTask, handleDeleteTask }) => {

  const [editToggle, setEditToggle] = useState(true)
  const [taskName, setTaskName] = useState(taskList.taskName)

  return (
    <StyledList key={ taskList.id }>
      <label htmlFor="check"/>
      <StyledInput
        type='checkbox'
        id='check'
        checked={ taskList.isChecked }
        onChange={ () => handleUpdateTask(
          { id: taskList.id,
            taskName: taskList.taskName,
            isChecked: !taskList.isChecked }) }
      />
      { editToggle ?
        <StyledTaskName
          key={ taskList.id }
          isChecked={ taskList.isChecked }
          id={ taskList.id }
          onDoubleClick={ () => setEditToggle(false) }
        >
          { taskList.taskName }
        </StyledTaskName>
        :
        <StyledEditInput
          key={ taskList.id }
          value={ taskName }
          onChange={ (e) => setTaskName(e.target.value) }
          onPressEnter={
            () => {
              handleUpdateTask(
                {
                  id: taskList.id,
                  taskName,
                  isChecked: taskList.isChecked
                }
              )
              setEditToggle(true)
            }
          }
        />
      }

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
  )}
