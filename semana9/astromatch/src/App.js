import React, { useState } from 'react'
import './App.css'
import AppBar from './components/AppBar/AppBar'
import Home from './components/Home/Home'
import MatchPage from './components/MatchPage/MatchPage'

function App() {
  const [trocarTela, setTrocarTela] = useState(true)
  const onClickTrocarTela = () => {
    setTrocarTela(!trocarTela)
  }
  return (
    <div className="App">
      <AppBar trocaTela={onClickTrocarTela}/>
      {trocarTela === true ? <Home /> : <MatchPage />}
    </div>
  )
}

export default App
