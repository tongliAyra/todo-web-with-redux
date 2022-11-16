import { CloseOutlined } from '@ant-design/icons'
import React from 'react'
import { StyledList } from '../styled-component/StyledList'
import { StyledInput } from '../styled-component/StyledInput'
import { StyledListWrapper } from '../styled-component/StyledListWrapper'
import { StyledDeleted } from '../styled-component/StyledDeleted'

export const TaskList = ({ taskList, handleUpdateTask, handleDeleteTask }) => {

  const sortedTasks = taskList.sort((a, b) => b.id - a.id)

  return (
    <StyledListWrapper>
      { sortedTasks.map((taskList) => (
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
          <span
            id={ taskList.id }
            style={ taskList.isChecked ?
              { textDecoration: 'line-through',
                color: 'lightgray',
                fontSize: '24px',
                paddingLeft: '10px'
              }:
              {
                fontSize: '24px',
                paddingLeft: '10px'
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
