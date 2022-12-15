import React, { useState } from 'react'
import { StyledTaskInputWrapper } from '../styled-component/StyledTaskInputWrapper'
import { StyledIcon } from '../styled-component/StyledIcon'
import { StyledTaskInput } from '../styled-component/StyledTaskInput'

const PLACEHOLDER = 'What needs to be done?'

export const TaskInput = (
  { handleUpdateTask,
    handleAddTask,
    completedTaskList,
    todoTaskList }) => {
  const [newTask, setNewTask] = useState('')

  const onChangeName = (e) => setNewTask(e.target.value)

  const handlePressEnter = () => {
    if (newTask.match(/^\s*$/)){
      return null
    }else {
      handleAddTask(newTask)
      setNewTask('')
    }
  }

  const checkTasks = () => {
    if (todoTaskList.length > 0){
      handleUpdateTask(todoTaskList)
    }else {
      handleUpdateTask(completedTaskList)
    }
  }

  return (
    <StyledTaskInputWrapper>
      <StyledIcon
        onClick={ checkTasks }/>
      <label htmlFor="add-task" />
      <StyledTaskInput
        type="text"
        placeholder={ PLACEHOLDER }
        onPressEnter={ handlePressEnter }
        value={ newTask }
        onChange={ onChangeName }
      />
    </StyledTaskInputWrapper>
  )
}
