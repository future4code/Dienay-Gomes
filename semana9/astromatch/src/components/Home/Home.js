import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Tela, Profile, Info, Choice, BackgroundPhoto, PhotoProfile, Like, Nope} from './style'
import LikeIcon from '../../images/icons/like.svg'
import NopeIcon from '../../images/icons/nope.svg'
import Load from '../Load/Load'

function Home(props) {
  const [profile, setProfile] = useState("")

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
    <div>
      {profile === "" ? <Load /> : 
        <Tela>
            <Profile>
              <BackgroundPhoto backPhoto={profile.photo} ></BackgroundPhoto>
              <PhotoProfile>
                <img src={profile.photo} alt="Foto de perfil"/>
              </PhotoProfile>
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
                <Nope src={NopeIcon} alt="nope" />
              </span>
              <span onClick={() => choosePerson(profile.id, true)}>
                <Like src={LikeIcon} alt="nope" />
              </span>
            </Choice>
        </Tela>
      }
    </div>
  )
}

export default Home