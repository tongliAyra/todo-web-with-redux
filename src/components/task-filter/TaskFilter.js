import React from 'react'

const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'
const CLEAR_COMPLETED = 'Clear completed'

export const TaskFilter = () => {
  return (
    <div>
      <button>{ ALL }</button>
      <button>{ ACTIVE }</button>
      <button>{ COMPLETED }</button>
      <button>{ CLEAR_COMPLETED }</button>
    </div>
  )
}
