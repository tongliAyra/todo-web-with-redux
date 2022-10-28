import { useDispatch } from 'react-redux'
import React from 'react'
import { deleteTasks, updateTasks } from '../api/todoTasksSlice'
// import './style.css'

export const TaskList = ({ tasks }) => {
  const dispatch = useDispatch()

  const sortedTasks = tasks.sort((a, b) => b.id - a.id)

  return (
    <ul>
      { sortedTasks.map((taskList) => (
        <li key={ taskList.id }>
          <label htmlFor="check-box" />
          <input
            type="checkbox"
            checked={ taskList.isChecked }
            onChange={ () =>
              dispatch(
                updateTasks({
                  id: taskList.id,
                  taskName: taskList.taskName,
                  isChecked: !taskList.isChecked
                })
              )
            }
          />
          <span
            id={ taskList.id }
            contentEditable={ true }
            suppressContentEditableWarning={ true }
            onBlur={ () => {
              const inputName = document.getElementById(
                `${taskList.id}`
              ).innerHTML
              dispatch(
                updateTasks({
                  id: taskList.id,
                  taskName: inputName,
                  isChecked: taskList.isChecked
                })
              )
            } }
          >
            { taskList.taskName }
          </span>
          <button
            className="delete-btn"
            onClick={ () => {
              dispatch(deleteTasks(taskList.id))
            } }
          >
            Delete
          </button>
        </li>
      )) }
    </ul>
  )
}
