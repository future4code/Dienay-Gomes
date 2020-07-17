import styled from 'styled-components'

export const Tela = styled.div `
    display: grid;
    padding: 16px;
    position: relative;
`
export const Profile = styled.div`
    align-items: center;
    border-radius: 4px;
    box-shadow: 0 0 4px #111111;
    flex-wrap: wrap;
    height: 420px;
    justify-content: center;
    position: relative;
    width: 368px;
`

export const BackgroundPhoto = styled.div`
    align-items: center;
    background-image: url(${props => props.backPhoto});
    background-size: (cover);
    background-attachment: fixed;
    border-radius: 4px;
    display: flex;
    filter: blur(10px);
    height: 420px;
    justify-content: center;
    opacity: .9;
    position: relative;
    width: 368px;
`
export const PhotoProfile = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;

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
    align-items: center;
    display: flex;
    height: 110px;
    justify-content: space-around;

    span {
        align-items: center;
        border: 1px solid #ff0000;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        height: 60px;
        justify-content: center;
        width: 60px;
    }

    span:hover {
        background-color: rgba(240, 73, 105, .4);
        border: 1px solid rgba(240, 73, 105, .4);
        transition: 350ms;
    }

    span:last-of-type {
        border: 1px solid #008000;
    }

    span:last-of-type:hover {
        background-color: rgba(113, 214, 182, .4);
        border: 1px solid rgba(113, 214, 182, .4);
        transition: 350ms;
    }
`

export const Like = styled.img`
    width: 40px;
`

export const Nope = styled.img`
    width: 40px;
`