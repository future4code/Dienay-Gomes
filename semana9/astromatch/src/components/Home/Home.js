import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Tela,Choice} from './style'

function Home(props) {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const getProfileToChoose = () => {
    axios
    .get(`${props.baseURL}person`).then(response => {
      setProfile(response.data.profile)
    }).catch(error => {
      console.log(error)
    })
  }

  const choosePerson = (idPerson, choose) => {
    const body = {
        id: idPerson,
        choice: choose
    }

    axios
    .post(`${props.baseURL}choose-person`, body).then(response => {
      console.log(response)
      getProfileToChoose()
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <Tela>
        <img src={profile.photo} />
        <h2>{profile.name},</h2>
        <p>{profile.age}</p>
        <p>{profile.bio}</p>
        <Choice>
          <button onClick={() => choosePerson(profile.id, false)}>descurtir</button>
          <button onClick={() => choosePerson(profile.id, true)}>curtir</button>
        </Choice>
    </Tela>
  )
}

export default Home