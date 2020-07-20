import React from 'react'
import {Tela} from './style'

function Load() {
  return (
    <Tela>
      <div class="loader">
        <div class="outer"></div>
        <div class="middle"></div>
        <div class="inner"></div>
      </div>
    </Tela>
  )
}

export default Load