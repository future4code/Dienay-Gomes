import React from 'react'
import {TelaLikeNope} from './style'
import ImageNope from '../../images/nope.svg'

function NopeChoice() {
  return (
    <TelaLikeNope>
      <img src={ImageNope} alt="nope" />
    </TelaLikeNope>
  )
}

export default NopeChoice