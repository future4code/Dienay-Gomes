import styled from 'styled-components'

export const Tela = styled.div `
    display: grid;
    padding: 16px;
    position: relative;
`
export const Profile = styled.div`
align-items: center;
flex-wrap: wrap;
border-radius: 4px;
box-shadow: 0 0 4px #111111;
height: 420px;
justify-content: center;
position: relative;
width: 368px;
`

export const BackgroundPhoto = styled.div`
    position: relative;
    align-items: center;
    background-image: url(${props => props.backPhoto});
    background-size: (cover);
    background-attachment: fixed;
    filter: blur(10px);
    opacity: .9;
    border-radius: 4px;
    display: flex;
    height: 420px;
    justify-content: center;
    width: 368px;
`
export const PhotoProfile = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
        object-fit: cover;
        object-position: center;
        max-height: 420px;
        max-width: 368px;
    }
`


export const Info = styled.div`
    background: linear-gradient( rgba(150,150,150,.4), rgba(0,0,0,.7));
    border-radius: 0 0 4px 4px;
    bottom: 0;
    color: #fff;
    padding: 0 4px;
    position: absolute;
    width: 98%;

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
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 110px;

    span {
        border: 1px solid #ff0000;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 60px;
        height: 60px;
    }

    span:last-of-type {
        border: 1px solid #008000;
    }
`

export const Like = styled.img`
    width: 40px;
`

export const Nope = styled.img`
    width: 40px;
`