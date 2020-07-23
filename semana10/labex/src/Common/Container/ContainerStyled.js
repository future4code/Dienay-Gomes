import styled from 'styled-components'

export const Container = styled.div`
    color: #484CAD;
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

    button {
        margin-bottom: 16px;
    }
`

export const ContainerSideBar = styled.div`
    background-color: #484CAD;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Field = styled.span`
    display: grid;
    width: 100%;

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

export const ContainerForm = styled.span`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    color: #484CAD;

    h2 {
        margin: 0;
    }

    form {
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
    }
`