import styled from 'styled-components'
import { Input } from 'antd'

export const StyledTaskInput = styled(Input)`
    font-size: 24px;
    font-style: italic;
    border: none;
    width: 400px;
    outline: none;
    font-family: inherit;
    font-weight: 300;
    
    &::placeholder {
    opacity: 0.3;    
    }
`
