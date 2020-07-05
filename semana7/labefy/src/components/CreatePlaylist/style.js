import styled from 'styled-components'

export const CreateNewPlaylist = styled.div`
    align-items: center;
    background-color: #282828;
    border-radius: 16px;
    box-shadow: 0 0 4px #000000;
    display: flex;
    flex-direction: column;
    height: 180px;
    left: 35%;
    padding: 16px;
    position: fixed;
    z-index: 1;
    top: 35%;
    width: 300px;

    > span {
        cursor: pointer;
        align-self: flex-end;
        justify-self: flex-start;
    }

    > h3 {
        margin: 0;
    }

    > input {
        margin: 10% 0;
        border: none;
        height: 20px;
        padding: 4px;
    }

    > button {
        background-color: #1db954;
        border: none;
        border-radius: 30px;
        font-weight: bold;
        color: #282828;
        height: 30px;
        width: 80px;
    }
`

