import React from 'react'
import { useState } from 'react'
import './style.css'
import { Input } from 'antd'

const PLACEHOLDER = 'What needs to be done?'

export const TaskInput = ({ handleAddTask }) => {
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

  return (
    <div>
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
