import React from 'react'
import { StyledFooter } from '../styled-component/StyledFooter'

const USAGE_INFO = 'Double click to edit todo'
export const Footer = () => {
  return (
    <footer>
      <StyledFooter>{ USAGE_INFO }</StyledFooter>
    </footer>
  )
}
