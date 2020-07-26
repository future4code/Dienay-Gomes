import React, { useEffect, useState } from 'react';
import { ListTrips, Item, CardDetail, Details, Quit } from './styled'
import { Container } from '../Common/Styles/ContainerStyled'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import { baseUrl, token, axiosConfig} from '../Common/CommonConst'
 
function TripDetailsPage() {
  const [list, setList] = useState("")
  const [detailTrip, setDetailTrip] = useState({})
  const [candidates, setCandidates] = useState([])

  const [showCard, setShowCard] = useState(false)

  const history = useHistory()

  useEffect(() => {
    getListTrips()
  },[])

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
    axios
    .get(`${baseUrl}/trip/${idTrip}`, axiosConfig)
    .then(response => {
      setDetailTrip(response.data.trip)
      setCandidates(response.data.trip.candidates)
    })
    .catch(err => {
      console.log(err.message)
    })

    cardShowHide()
  }

  const cardShowHide = () =>{
    setShowCard(!showCard)
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
            <ul>
              {candidates.map(human => {
                return (
                <li>
                  <p>Nome: {human.name}</p>
                  <p>Idade: {human.age}</p>
                  <p>Profissão: {human.profession}</p>
                  <p>País: {human.country}</p>
                  <p>Bio: {human.applicationText}</p>
                  <button>Confirmar</button>
                  <button>Recusar</button>
                </li>
                )
              })}
            </ul>
          </Details>
        </CardDetail>
        }</>
      }
    </Container>
   )
}
export default TripDetailsPage; 
