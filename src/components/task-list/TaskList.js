import React from 'react'

export const TaskList = ({ taskList, handleUpdateTask, handleDeleteTask }) => {

  const sortedTasks = taskList.sort((a, b) => b.id - a.id)

  return (
    <ul>
      { sortedTasks.map((taskList) => (
        <li key={ taskList.id }>
          <label htmlFor="check-box" />
          <input
            type="checkbox"
            checked={ taskList.isChecked }
            onChange={ () => handleUpdateTask(
              { id: taskList.id,
                taskName: taskList.taskName,
                isChecked: !taskList.isChecked }) }
          />
          <span
            id={ taskList.id }
            contentEditable={ true }
            suppressContentEditableWarning={ true }
          >
            { taskList.taskName }
          </span>
          <button
            className="delete-btn"
            onClick={ () => handleDeleteTask(taskList.id) }
          >
            Delete
          </button>
        </li>
      )) }
    </ul>
  )
}
