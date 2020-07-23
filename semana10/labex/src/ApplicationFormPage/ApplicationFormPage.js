import React, { useEffect, useState }  from 'react';
import { FieldGroup, Quit } from './styled';
import { Container, Field, ContainerForm } from '../Common/Container/ContainerStyled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dienay/trips"

function ApplicationFormPage() {
  const [list, setList] = useState([])
  
  const history = useHistory()

  const goToListTripsPage = () => {
    history.push("/list")
  }

  useEffect(() => {
    getListTrips()
  },[])

  const getListTrips = () => {
    axios
    .get(baseUrl)
    .then(response => {
      console.log(response.data.trips)
      setList(response.data.trips)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
   return (
       <Container>
            <SideBar />
           <ContainerForm>
            <form>
              <Quit onClick={goToListTripsPage} >X</Quit>
              <h2>Informações do candidato</h2>
              <Field>
                <label>Nome</label>
                <input type="text" placeholder="João" />
              </Field>

              <FieldGroup>
                <Field>
                  <label>Idade</label>
                  <input type="number" placeholder="21" />
                </Field>

                <Field>
                  <label>País</label>
                  <input type="text" placeholder="Brasil" />
                </Field>
              </FieldGroup>
              
              <Field>
                <label>Profissão</label>
                <input type="text" placeholder="Artista" />
              </Field>
              
              <Field>
                <label>Porque sou um bom Candidato(a)</label>
                <textarea placeholder="sou legal"></textarea>
              </Field>

              <Field>
                <label>Destino</label>
                <select>
                  {list.map(travel => {
                    return <option>{travel.name}</option>
                  })}
                </select>
              </Field>

              <Button onClick={''} variant="contained" color="primary">Candidatar-se</Button>
            </form>
          </ContainerForm>
       </Container>
   )
}
 
export default ApplicationFormPage;
