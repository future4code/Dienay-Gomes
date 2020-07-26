import React, { useEffect, useState } from 'react';
import { ListTrips, Item, CardDetail, Details, CandidatesList, Approved, Applications } from './styled'
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
      if (option === true) {
        alert("Candidato aprovado")
      } else {
        alert("Candidato reprovado")
      }
      setShowCard(!showCard)
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
            <Quit onClick={cardShowHide}>Voltar</Quit>
            <h2>{detailTrip.name}</h2>
            <p>Planeta: {detailTrip.planet}</p>
            <p>Data: {detailTrip.date}</p>
            <p>Duração em dias: {detailTrip.durationInDays}</p>
            <p>Descrição: {detailTrip.description}</p>
          </Details>
          <CandidatesList>
            <Approved>
                <h3>Aprovados</h3>
                <ul>
                  {approved.map(candidate => {
                    return (
                      <li>
                        <div>
                          <p>Nome</p>
                          <div>{candidate.name}</div>
                        </div>
                        <div>
                          <p>Idade</p>
                          <div>{candidate.age}</div>
                        </div>
                        <div>
                          <p>Profissão</p>
                          <div>{candidate.profession}</div>
                        </div>
                        <div>
                          <p>País</p>
                          <div>{candidate.country}</div>
                        </div>
                        <div>
                          <p>Bio</p>
                          <div>{candidate.applicationText}</div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </Approved>
            <Applications>
              <h3>Aplicações</h3>
              <ul>
                {candidates.map(human => {
                  return (
                  <li>
                    <p>Nome: {human.name}</p>
                    <p>Idade: {human.age}</p>
                    <p>Profissão: {human.profession}</p>
                    <p>País: {human.country}</p>
                    <p>Bio: {human.applicationText}</p>
                    <div>
                      <Button onClick={() => handleDecide(human.id, true)}>Confirmar</Button>
                      <Button onClick={() => handleDecide(human.id, false)}>Recusar</Button>
                    </div>
                  </li>
                  )
                })}
              </ul>
            </Applications>
          </CandidatesList>
        </CardDetail>
        }</>
      }
    </Container>
   )
}
export default TripDetailsPage; 
