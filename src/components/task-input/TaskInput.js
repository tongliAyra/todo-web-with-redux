import React, { useState } from 'react'
import { StyledTaskInputWrapper } from '../styled-component/StyledTaskInputWrapper'
import { StyledIcon } from '../styled-component/StyledIcon'
import { StyledTaskInput } from '../styled-component/StyledTaskInput'
import { useDispatch } from 'react-redux'
import { addTaskSaga } from '../../sagaActions'

const PLACEHOLDER = 'What needs to be done?'

export const TaskInput = (
  { handleUpdateTask,
    completedTaskList,
    todoTaskList }) => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const onChangeName = (e) => setNewTask(e.target.value)

  const handlePressEnter = () => {
    if (newTask.match(/^\s*$/)){
      return null
    }else {
      dispatch(addTaskSaga({
        taskName: newTask.trim(),
        isChecked: false }))
      setNewTask('')
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
        onPressEnter={ handlePressEnter }
        value={ newTask }
        onChange={ onChangeName }
      />
    </StyledTaskInputWrapper>
  )
}
