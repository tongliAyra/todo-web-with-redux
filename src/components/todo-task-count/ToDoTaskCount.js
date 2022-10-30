import React from 'react'

export const ToDoTaskCount = ({ todoTaskCount }) => {
  const todoCountAmount = todoTaskCount
  const ITEMS_LEFT = 'items left'

  return <p>{ todoCountAmount } { ITEMS_LEFT }</p>
}
