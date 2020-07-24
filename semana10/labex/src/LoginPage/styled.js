import React from 'react'
import styled from 'styled-components'

export const ContainerLogin = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    color: #484CAD;

    div {
        align-items: center;
        border: 1px solid #484CAD;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        height: 250px;
        justify-content: space-evenly;
        padding: 8px;
        position: relative;
        width: 250px;
    }

    h2 {
        margin: 0;
    }

    input {
        border: 1px solid #484CAD;
        border-radius: 8px;
        height: 24px;
        outline: none;
    }
`
export const Quit = styled.span`
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
`