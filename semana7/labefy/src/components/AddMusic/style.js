import styled from 'styled-components'

export const AddNewMusic = styled.div`
    padding: 16px;
    background-color: #282828;
    

    > h3 {
        margin: 0;
        align-self: flex-start;
        margin-bottom: 8px;
        text-align: center;
    }

    > div {
        align-items: center;
        justify-content: space-evenly;
        display: flex;
    }

    > div > input {
        border: none;
        height: 20px;
    }

    > div > button {
        background-color: #1db954;
        border: none;
        border-radius: 30px;
        font-weight: bold;
        color: #282828;
        height: 25px;
        width: 80px;
    }

    > span {
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 16px;
    }
`
