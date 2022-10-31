import React from 'react'

const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'
const CLEAR_COMPLETED = 'Clear completed'

export const TaskFilter = (
  {
    handleTaskFilter,
    completedTaskId,
    handleDeletedTask
  }) => {

  const haveToDoTask = () => completedTaskId.length > 0

  return (
    <div>
      <button
        onClick={ () => handleTaskFilter({
          showAllTask: true,
          showTodoTask: false,
          showCompletedTask: false
        })
        }>
        { ALL }
      </button>
      <button
        onClick={ () => handleTaskFilter({
          showAllTask: false,
          showTodoTask: true,
          showCompletedTask: false
        })
        }>
        { ACTIVE }
      </button>
      <button onClick={ () => handleTaskFilter({
        showAllTask: false,
        showTodoTask: false,
        showCompletedTask: true
      })
      }>
        { COMPLETED }
      </button>
      { haveToDoTask() &&
        <button
          onClick={ () => completedTaskId.map((id) => handleDeletedTask(id))
          }>
          { CLEAR_COMPLETED }
        </button> }
    </div>
  )
}
