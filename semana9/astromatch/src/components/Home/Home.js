import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Tela, Profile, Info, Choice, Photo} from './style'
import Like from '@material-ui/icons/ThumbUp'
import Nope from '@material-ui/icons/ThumbDown'

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
      getProfileToChoose()
    }).catch(error => {
      console.log(error)
    })
  }
  
  return (
    <Tela>
        <Profile>
          <Photo backPhoto={profile.photo} >
            <img src={profile.photo} alt="Foto de perfil"/>
          </Photo>
          <Info>
            <div>
              <p>{profile.name},</p>
              <p>{profile.age}</p>
            </div>
            <p>{profile.bio}</p>
          </Info>
        </Profile>
        <Choice>
          <span onClick={() => choosePerson(profile.id, false)}>
            <Nope />
          </span>
          <span onClick={() => choosePerson(profile.id, true)}>
            <Like />
          </span>
        </Choice>
    </Tela>
  )
}

export default Home