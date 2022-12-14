import React from 'react'
import { StyledListWrapper } from '../styled-component/StyledListWrapper'
import { SingleTask } from './SingleTask'

export const TaskList = ({ taskList, handleUpdateTask, handleDeleteTask }) => {

  const sortedTasks = [...taskList]
  const renderList = sortedTasks.sort((a, b) => b.id - a.id)

  return (
    <StyledListWrapper>
      { renderList.map((task) =>
        (<SingleTask
          key={ task.id }
          taskList={ task }
          handleUpdateTask={ handleUpdateTask }
          handleDeleteTask={ handleDeleteTask }
        />)) }
    </StyledListWrapper>
  )
}
