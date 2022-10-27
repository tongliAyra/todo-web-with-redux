import React from 'react'
import { useDispatch } from 'react-redux'
import { addTasks } from '../api/todoTasksSlice'
import { useState } from 'react'
import './TaskInput.css'
import { Input } from 'antd'
import { ErrorMessage } from '../error-message/ErrorMessage'

const PLACEHOLDER = ' Enter your todo item'
const ADD_BUTTON = '+'

export const TaskInput = () => {
  const [task, setTask] = useState('')
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const handleAddTasks = () => {
    if (task.match(/^\s*$/)) {
      setError(true)
    } else {
      dispatch(
        addTasks({
          taskName: task.trim(),
          isChecked: false
        })
      )
      setTask('')
      setError(false)
    }
  }
  const onChangeName = (e) => {
    setTask(e.target.value)
  }
  return (
    <div>
      <label htmlFor="add-task" />
      <Input
        type="text"
        className="add-task"
        placeholder={ PLACEHOLDER }
        value={ task }
        onChange={ onChangeName }
      />
      <button className="add-btn" onClick={ handleAddTasks }>
        { ADD_BUTTON }
      </button>
      { error && <ErrorMessage /> }
    </div>
  )
}