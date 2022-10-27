import React from 'react'

export const TaskCount = () => {
  const countAmount = 3
  const ITEMS_LEFT = 'items left'

  return <p>{ countAmount } { ITEMS_LEFT }</p>
}
