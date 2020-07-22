import styled from 'styled-components'

export const ContainerCreatePage = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
    color: #484CAD;

    div {
        
    }

    h2 {
        margin: 0;
    }

    input {
        border: 1px solid #484CAD;
        border-radius: 8px;
        height: 30px;
    }

    select {
        border: 1px solid #484CAD;
        border-radius: 8px;
        height: 24px;
    }

    textarea {
        border: 1px solid #484CAD;
        border-radius: 8px;
    }
`

export const Form = styled.span`
    align-items: center;
    border: 1px solid #484CAD;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 500px;
    justify-content: space-evenly;
    padding: 32px;
    position: relative;
    width: 400px;
`

export const Field = styled.span`
    display: grid;
    width: 100%;
`

export const FieldGroup = styled.span`
    display: grid;
    grid-template-columns: 1fr 5fr;
    width: 100%;
    gap: 8px;
`

export const Quit = styled.span`
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
`