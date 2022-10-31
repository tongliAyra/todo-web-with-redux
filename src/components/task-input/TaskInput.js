import React, { useState } from 'react'
import './style.css'
import { Input } from 'antd'
import { DownOutlined } from '@ant-design/icons'

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
    <div>
      <DownOutlined onClick={ () => checkTasks() }/>
      <label htmlFor="add-task" />
      <Input
        type="text"
        className="add-task"
        placeholder={ PLACEHOLDER }
        onPressEnter={ () => handlePressEnter() }
        value={ taskName }
        onChange={ onChangeName }
      />
    </div>
  )
}
