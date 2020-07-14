import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Tela} from './style'

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/dienay/person"

function Home() {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const getProfileToChoose = () => {
    axios
    .get(url).then(response => {
      setProfile(response.data.profile)
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
    </Tela>
  )
}

export default Home