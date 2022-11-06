import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    color: rgba(175, 47, 47, 0.15);
    margin: auto;
`

const TITLE = 'todos'
export const Header = () => <StyledHeader>{ TITLE }</StyledHeader>
