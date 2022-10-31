import React from 'react'

const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'
const CLEAR_COMPLETED = 'Clear completed'

export const TaskFilter = ({ handleTaskFilter }) => {
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
      <button>{ CLEAR_COMPLETED }</button>
    </div>
  )
}
