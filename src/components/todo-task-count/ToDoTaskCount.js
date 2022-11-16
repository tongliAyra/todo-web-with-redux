import React from 'react'
import { StyledToDoTaskCount } from '../styled-component/StyledToDoTaskCount'

export const ToDoTaskCount = ({ todoTaskCount }) => {
  const todoCountAmount = todoTaskCount
  const ITEMS_LEFT = 'items left'

  return <StyledToDoTaskCount>{ todoCountAmount } { ITEMS_LEFT }</StyledToDoTaskCount>
}
