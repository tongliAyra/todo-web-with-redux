import React from 'react'
import { TaskCount } from '../task-count/TaskCount'

const ALL = 'All'
const ACTIVE = 'Active'
const COMPLETED = 'Completed'

export const TaskFilter = () => {
  return (
    <div>
      <TaskCount/>
      <button>{ ALL }</button>
      <button>{ ACTIVE }</button>
      <button>{ COMPLETED }</button>
    </div>
  )
}
