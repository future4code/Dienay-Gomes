import React, { useState, useEffect } from 'react'
import {ListMatch} from './style'
import axios from 'axios'
import Load from '../Load/Load'

function MatchPage(props) {
  const [matches, setMatches] = useState("")

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
    <div>
      {matches === "" ? <Load /> :
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
      }
    </div>
  )
}

export default MatchPage