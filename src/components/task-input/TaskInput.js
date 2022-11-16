import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const StyledTaskInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    box-shadow: inset 0 -2px 4px rgb(0 0 0 / 6%);
    width: 550px;
    height: 70px;
`

const StyledTaskInput = styled.input`
    font-size: 24px;
    font-style: italic;
    border: none;
    width: 400px;
    outline: none;
    font-family: inherit;
    font-weight: 300;
    opacity: 0.3;
`

const StyledIcon = styled(DownOutlined)`
    display: flex;
    font-size: x-large;
    color: lightgray;
    align-items: center;
`

const PLACEHOLDER = 'What needs to be done?'

export const TaskInput = (
  { handleAddTask,
    handleUpdateTask,
    completedTaskList,
    todoTaskList }) => {
  const [taskName, setTaskName] = useState('')

  const onChangeName = (e) => setTaskName(e.target.value)

  const handlePressEnter = () => {
    if (taskName !== ''){
      handleAddTask({ taskName, isChecked: false })
      setTaskName('')
    }else {
      return null
    }
  }

  const handleAllTaskCompleted = () => todoTaskList.map(
    (task) => handleUpdateTask(
      { id: task.id, taskName: task.taskName, isChecked: !task.isChecked }))

  const handleAllTaskToDo = () => completedTaskList.map(
    (task) => handleUpdateTask(
      { id: task.id, taskName: task.taskName, isChecked: !task.isChecked }))

  const checkTasks = () => {
    if (todoTaskList.length > 0){
      handleAllTaskCompleted()
    }else {
      handleAllTaskToDo()
    }
  }


  return (
    <StyledTaskInputWrapper>
      <StyledIcon
        onClick={ () => checkTasks() }/>
      <label htmlFor="add-task" />
      <StyledTaskInput
        type="text"
        placeholder={ PLACEHOLDER }
        onPressEnter={ () => handlePressEnter() }
        value={ taskName }
        onChange={ onChangeName }
      />
    </StyledTaskInputWrapper>
  )
}
