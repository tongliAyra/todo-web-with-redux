import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 10px;
  color: lightgray;
`
const USAGE_INFO = 'Double click to edit todo'
export const Footer = () => {
  return (
    <footer>
      <StyledFooter>{ USAGE_INFO }</StyledFooter>
    </footer>
  )
}
