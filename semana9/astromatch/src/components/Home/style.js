import styled from 'styled-components'

export const Tela = styled.div `
    display: grid;
    padding: 16px;
    position: relative;
`
export const Profile = styled.div`
background-color: rgba(100, 120, 182, .3);
align-items: center;
flex-wrap: wrap;
border-radius: 4px;
box-shadow: 0 0 4px #111111;
height: 420px;
justify-content: center;
position: relative;
width: 368px;
`

export const Photo = styled.div`
    align-items: center;
    display: flex;
    border-radius: 4px;
    height: 420px;
    justify-content: center;
    width: 368px;

    > img {
        object-fit: cover;
        object-position: center;
        max-height: 420px;
        max-width: 368px;
    }
`

export const Info = styled.div`
    color: #fff;
    position: absolute;
    bottom: 0;

    div {
        display: flex;
        font-size: 25px;
        font-weight: bold;
        
        p {
            margin: 4px 8px;
        }
    }
`

export const Choice = styled.div`
    span {
        cursor: pointer;
        path {
            width: 40px;
        }
    }
`