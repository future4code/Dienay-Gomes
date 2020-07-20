import React from 'react'
import {TelaLikeNope} from './style'
import ImageLike from '../../images/like.svg'

function LikeChoice() {
  return (
    <TelaLikeNope>
      <img src={ImageLike} alt="nope" />
    </TelaLikeNope>
  )
}

export default LikeChoice