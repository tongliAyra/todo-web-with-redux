import styled from 'styled-components'
//todo: try to use svg about checkbox '✓'
export const StyledInput = styled.input`
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 1px solid #c9c7c7;
    width: 30px;
    height: 30px;
    border-radius: 50%;

  &:checked{
    border: 1px solid #c7dca4;
    border-radius: 50%;
    }
  &:before {
    content: "✓";
    color: #c7dca4;
    display: none;
    font-weight: 2000;
    font-size: 25px;
    }

  &:checked:before {
    display: block;
    }

`
