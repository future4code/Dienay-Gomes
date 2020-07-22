import React from 'react'
import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100vh;

    sidebar {
        background-color: #484CAD;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 6em;
        margin: 0;
    }
`
