import styled from 'styled-components'

export const Container = styled.div`
box-sizing: border-box;
display: grid;
grid-template-columns: 1fr 4fr;
height: 100vh;

li {
    list-style: none;
}
`

export const ContainerPlayList = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: #121212;
color: #b3b3b3;
height: 100vh;

`

export const Playlist = styled.div`
margin: 0 16px;
font-weight: 200;
font-size: 14px;

> p {
    
}

> ul {
    padding: 0;
}

> ul > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    list-style: none;
    font-weight: 400;
}

> ul > li > img {
    width: 14px;
    cursor: pointer;
}

> ul > li > span {
    cursor: pointer;
}
`

export const TopPlaylist = styled.div`
margin-bottom: 32px;

> div {
    display: flex;
}

> div > img {
    margin-right: 16px;
    width: 18px;
}
`

export const AddNewPlaylist = styled.div`
border-top: 1px solid #282828;
cursor: pointer;
display: flex;
padding: 16px;
width: 100%;

img {
        width: 16px;
        margin-right: 8px;
}

`

export const Musics = styled.div`
background-color: #181818;
color: #b3b3b3;
height: 100vh;

> ul > li {
    border-bottom: 1px solid #282828;
    margin-bottom: 16px;
}

> ul > li > div {
    display: grid;
    grid-template-columns: 2fr 3fr .4fr;
    align-items: center;
    padding: 8px;
    font-size: 14px;
}

> ul > li > div > img {
    width: 16px;
}

> div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282828;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    right: 16px;
    bottom: 16px;
    cursor: pointer;
}

> div > img {
    width: 30px;
    height: 30px;
}
`

