import React, { useEffect, useState } from 'react';
import { ListTrips, Item, CardDetail } from './styled'
import { Container, Quit } from '../Common/Container/ContainerStyled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import { baseUrl } from '../Common/CommonConst'

function ListTripsPage() {
  const [list, setList] = useState("")

  const [showCard, setShowCard] = useState(false)
  const [name, setName] = useState([])
  const [planet, setPlanet] = useState([])
  const [date, setDate] = useState([])
  const [description, setDescription] = useState([])

  const history = useHistory()

  const goToApplicationFormPage = () => {
    history.push("/application-form")
  }

  useEffect(() => {
    getListTrips()
  },[])

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

  const getTripToDetail = (name, planet, date, description) => {
    setName(name)
    setPlanet(planet)
    setDate(date)
    setDescription(description)
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
          <h2>Nossos destinos confirmados</h2>
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
                onClick={() => getTripToDetail(
                  travel.name,
                  travel.planet,
                  travel.date,
                  travel.description)}
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
          <section>
            <Quit onClick={cardShowHide}>X</Quit>
            <h2>{name}</h2>
            <div><span>Planeta: </span><span>{planet}</span></div>
            <div><span>Data: </span><span>{date}</span></div>
            <div><span>Descrição: </span><span>{description}</span></div>
            <Button onClick={goToApplicationFormPage} variant="contained" color="primary">Candidatar-se</Button>
          </section>
        </CardDetail>
        }</>
      }
    </Container>
   )
}
 
export default ListTripsPage;
