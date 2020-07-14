import React from 'react'

function AppBar(props) {
  console.log(props.trocaTela)
  return (
    <div>
      <h1>Astromatch</h1>
      <button onClick={props.trocaTela}>trocar</button>
    </div>
  )
}

export default AppBar