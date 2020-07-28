import styled from 'styled-components'

//Grid contendo barra lateral com navegação e parte central com conteúdo
export const Container = styled.div`
    color: #484CAD;
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 100vh;

    button {
        margin-bottom: 16px;
    }
`

export const ContainerSideBar = styled.div`
    background-color: #484CAD;
    

    > div {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
    }

`

//estilo genérico dos formulários maiores
export const ContainerForm = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    color: #484CAD;

    h2 {
        margin: 0;
    }
`
export const Form = styled.form`
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

export const FieldGroup = styled.span`
    display: grid;
    grid-template-columns: 2fr 4fr;
    width: 100%;
    gap: 8px;
`

export const Field = styled.span`
    display: grid;
    width: 100%;

    input {
        border: 1px solid #484CAD;
        border-radius: 8px;
        height: 30px;
        outline: none;
    }

    select {
        background-color: white;
        border: 1px solid #484CAD;
        border-radius: 8px;
        height: 35px;
        outline: none;
    }

    textarea {
        border: 1px solid #484CAD;
        border-radius: 8px;
        outline: none;
    }
`

export const Quit = styled.span`
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 8px;
`