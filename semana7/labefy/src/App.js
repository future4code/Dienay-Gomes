import React from 'react'
import Playlists from './components/Playlists'
import Musics from './components/Musics'
import styled from "styled-components"
import './font.css'

const Container = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100vh;
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <Playlists />

        <Musics />
      </Container>
    )
  } 
}

export default App;
