import React, { useEffect, useState } from 'react';
import { ListTrips, Item, CardDetail, Details, Applications } from './styled'
import { Container, Quit } from '../Common/Styles/ContainerStyled'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import { baseUrl, axiosConfig} from '../Common/CommonConst'
import {Button} from '../Common/Styles/Button'
 
function TripDetailsPage() {
  const [list, setList] = useState("")
  const [detailTrip, setDetailTrip] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approved, setApproved] = useState([])
  const [tripId, setTripId] = useState("")

  const [showCard, setShowCard] = useState(false)

  const history = useHistory()

  useEffect(() => {
    getListTrips()
  },[])

  const token = window.localStorage.getItem("token")

  useEffect(() => {
    if (token === null) {
      history.push("/login")
    }
  }, [history])

  const getListTrips = () => {
    axios
    .get(`${baseUrl}/trips`)
    .then(response => {
      setList(response.data.trips)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const getTripToDetail = (idTrip) => {
    setTripId(idTrip)
    axios
    .get(`${baseUrl}/trip/${idTrip}`, axiosConfig)
    .then(response => {
      setDetailTrip(response.data.trip)
      setCandidates(response.data.trip.candidates)
      setApproved(response.data.trip.approved)
    })
    .catch(err => {
      console.log(err.message)
    })

    cardShowHide()
  }

  const cardShowHide = () =>{
    setShowCard(!showCard)
  }

  const handleDecide = (humanId, option) => {
    const body = {
      "approve": option
    }

    axios
    .put(`${baseUrl}/trips/${tripId}/candidates/${humanId}/decide`, body, axiosConfig)
    .then(response => {
      console.log(response.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

   return (
    <Container>
      <SideBar />
      {list === "" ?
       <div>...Carregando</div>
      :<>
      {showCard === false ?
        <ListTrips>
          <h2>Todas as viagens</h2>
          <ul>
            <li>
              <p>nome</p>
              <p>planeta</p>
              <p>data</p>
              <p>descrição</p>
            </li>
            {list.map(travel => {
              return (
              <Item
                key={travel.id}
                onClick={() => getTripToDetail(travel.id)}
              >
                <p>{travel.name}</p>
                <p>{travel.planet}</p>
                <p>{travel.date}</p>
                <p>{travel.description}</p>
              </Item>)
            })}
          </ul>
        </ListTrips>
        :
        <CardDetail>
          <Details>
            <h2>{detailTrip.name}</h2>
            <p>Planeta: {detailTrip.planet}</p>
            <p>Data: {detailTrip.date}</p>
            <p>Duração em dias: {detailTrip.durationInDays}</p>
            <p>Descrição: {detailTrip.description}</p>
            <div>
              <h3>Aprovados</h3>
              <ul>
                {approved.map(candidate => {
                  return (
                    <li>
                      <p>Nome: {candidate.name}</p>
                      <p>Idade: {candidate.age}</p>
                      <p>Profissão: {candidate.profession}</p>
                      <p>País: {candidate.country}</p>
                      <p>Bio: {candidate.applicationText}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Details>
          <Applications>
          <Quit onClick={cardShowHide}>Voltar</Quit>
            <h2>Aplicações</h2>
            <ul>
              {candidates.map(human => {
                return (
                <li>
                  <p>Nome: {human.name}</p>
                  <p>Idade: {human.age}</p>
                  <p>Profissão: {human.profession}</p>
                  <p>País: {human.country}</p>
                  <p>Bio: {human.applicationText}</p>
                  <Button onClick={() => handleDecide(human.id, true)}>Confirmar</Button>
                  <Button onClick={() => handleDecide(human.id, false)}>Recusar</Button>
                </li>
                )
              })}
            </ul>
          </Applications>
        </CardDetail>
        }</>
      }
    </Container>
   )
}
export default TripDetailsPage; 
