import React from 'react'
import {TopBar} from './style'

function AppBar(props) {
  return (
    <TopBar>
      <h1>Astromatch</h1>
      <button onClick={props.trocaTela}>trocar</button>
    </TopBar>
  )
}

export default AppBar