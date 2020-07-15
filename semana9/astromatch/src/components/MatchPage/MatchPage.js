import React, { useState, useEffect } from 'react'
import {ListMatch} from './style'
import axios from 'axios'

function MatchPage(props) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  },[])

  const getMatches = () => {
    axios
    .get(`${props.baseURL}matches`).then(response => {
      setMatches(response.data.matches)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <ListMatch>
      <ul>
        {matches.map(pessoa => {
          return (
            <li key={pessoa.id}>
              <img src={pessoa.photo} alt={'foto de perfil'} />
              <p>{pessoa.name}</p>
            </li>
          )
        })}
      </ul>
    </ListMatch>
  )
}

export default MatchPage