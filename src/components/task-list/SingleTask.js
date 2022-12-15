import React, { useState } from 'react'
import { StyledList } from '../styled-component/StyledList'
import { StyledInput } from '../styled-component/StyledInput'
import { StyledTaskName } from '../styled-component/StyledTaskName'
import { StyledEditInput } from '../styled-component/StyledEditInput'
import { StyledDeleted } from '../styled-component/StyledDeleted'
import { CloseOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { updateTaskSaga } from '../../redux/saga/sagaActions'

export const SingleTask = ({ task, handleUpdateTask, handleDeleteTask }) => {

  const [editToggle, setEditToggle] = useState(true)
  const [taskName, setTaskName] = useState(task.taskName)
  const dispatch = useDispatch()

  const handleEditTask = () => {
    dispatch(updateTaskSaga({ ...task, taskName }))
    setEditToggle(true)
  }

  return (
    <StyledList key={ task.id }>
      <label htmlFor="check"/>
      <StyledInput
        type='checkbox'
        id='check'
        checked={ task.isChecked }
        onChange={ () => handleUpdateTask(task) }
      />
      { editToggle ?
        <StyledTaskName
          key={ task.id }
          isChecked={ task.isChecked }
          id={ task.id }
          onDoubleClick={ () => setEditToggle(false) }
        >
          { task.taskName }
        </StyledTaskName>
        :
        <StyledEditInput
          key={ task.id }
          value={ taskName }
          onChange={ (e) => setTaskName(e.target.value) }
          onPressEnter={ handleEditTask }
        />
      }

      <StyledDeleted
        className='delete-btn-wrapper'
      >
        <CloseOutlined
          onClick={ () => handleDeleteTask(task.id) }
          className="delete-btn"
          size='middle'
        />
      </StyledDeleted>
    </StyledList>
  )}
