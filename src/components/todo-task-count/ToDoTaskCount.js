import React from 'react'

export const ToDoTaskCount = () => {
  const todoCountAmount = 3
  const ITEMS_LEFT = 'items left'

  return <p>{ todoCountAmount } { ITEMS_LEFT }</p>
}
