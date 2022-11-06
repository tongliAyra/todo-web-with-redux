import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { Input } from 'antd'

const StyledTaskInput = styled(Input)`
    font-size: 24px;
    font-style: italic;
    border: none;
    width: 400px;
    -webkit-font-smoothing: antialiased
`

const StyledTaskInputWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: 16px 16px 16px 60px;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
`

const StyledIcon = styled(DownOutlined)`
    font-size: x-large;
    color: gray;
    align-items: center;
    display: flex;
    width: 60px;
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
