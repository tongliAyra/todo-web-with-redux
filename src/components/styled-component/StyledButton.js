import styled from 'styled-components'

export const StyledButton = styled.button`
    font-size: 14px;
    color: #0000008c;
    margin-left: 10px;
    border: none;
    background-color: white;
    cursor: pointer;
    
    &:hover{
    border: 1px solid rgba(175, 47, 47, 0.2);
    border-radius: 4px;    
    }
    
    &:focus{
    border: 1px solid #e2909d;
    border-radius: 4px;
    }
`
