import styled from 'styled-components'

export const StyledList = styled.li`
  display: flex;
  gap: 5px;
  height: 58px;
  align-items: center;
  border-bottom: 0.3px solid lightgray;
  
  .delete-btn-wrapper{
  opacity: 0;
  }
 
  &:hover{
  .delete-btn-wrapper{
  opacity: 1;
  }
  
  
`
