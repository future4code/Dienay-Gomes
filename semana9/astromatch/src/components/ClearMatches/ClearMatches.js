import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Tela,Choice} from './style'

function ClearMatches(props) {
  const resetMatches = () => {
    axios
    .put(`${props.baseURL}clear`).then(response => {
      console.log(response.message)
    }).catch(error => {
      console.log(error.message)
    })
  }

  return (
    <Tela>
      <button onClick={resetMatches}>limpar</button>
    </Tela>
  )
}

export default ClearMatches