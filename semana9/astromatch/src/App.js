import React, { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import Home from './components/Home/Home'
import MatchPage from './components/MatchPage/MatchPage'
import styled from 'styled-components'
import ClearMatches from './components/ClearMatches/ClearMatches'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/west/"

const TelaApp = styled.div`
  align-items: center;
  display:flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  section {
    border: 1px solid #000;
    border-radius: 4px;
    height: 600px;
    width: 400px;
  }
`

function App() {
  const [trocarTela, setTrocarTela] = useState(true)
  const onClickTrocarTela = () => {
    setTrocarTela(!trocarTela)
  }

  return (
    <TelaApp>
      <section>
        <AppBar trocaTela={onClickTrocarTela} trocouTela={trocarTela}/>
        {trocarTela === true ? <Home baseURL={baseURL}/> : <MatchPage baseURL={baseURL}/>}
      </section>
      <ClearMatches baseURL={baseURL}/>
    </TelaApp>
  )
}

export default App
