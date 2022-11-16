import styled from 'styled-components'

export const StyledTaskName = styled.span`
  text-decoration: ${props => props.isChecked? 'line-through': undefined};
  color: ${props => props.isChecked? 'lightgray': undefined};
  font-size: 24px;
  padding-left: 10px;
`
