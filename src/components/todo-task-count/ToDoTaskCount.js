import React from 'react'
import styled from 'styled-components'

const StyledToDoTaskCount = styled.p`
  font-size: 14px;
  color: #0000008c;
  margin-left: 10px;
`

export const ToDoTaskCount = ({ todoTaskCount }) => {
  const todoCountAmount = todoTaskCount
  const ITEMS_LEFT = 'items left'

  return <StyledToDoTaskCount>{ todoCountAmount } { ITEMS_LEFT }</StyledToDoTaskCount>
}
