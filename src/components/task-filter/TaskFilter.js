import React from 'react'

const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'

export const TaskFilter = () => {
  return (
    <div>
      <button>{ ALL }</button>
      <button>{ ACTIVE }</button>
      <button>{ COMPLETED }</button>
    </div>
  )
}
