 import React, { useEffect, useState } from 'react';
 import { Quit } from './styled';
 import { Container, Field, ContainerForm} from '../Common/Container/ContainerStyled'
 import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dienay"
 
 function CreateTripPage() {
   const [name, setName] = useState("")
   const [planet, setPlanet] = useState("")
   const [date, setDate] = useState("")
   const [description, setDescription] = useState("")
   const [durationInDays, setDurationInDays] = useState("")


   const onChangeName = event => {
     setName(event.target.value)
   }
   const onChangePlanet = event => {
    setPlanet(event.target.value)
   }
   const onChangeDate = event => {
    const data = new Date(event.target.value),
     day  = (data.getDate()+1).toString().padStart(2, '0'),
     month  = (data.getMonth()+1).toString().padStart(2, '0'),
     year  = data.getYear() - 100
     return setDate(day+"/"+month+"/"+year)
   }
   const onChangeDescription = event => {
    setDescription(event.target.value)
   }
   const onChangeDurationInDays = event => {
    setDurationInDays(event.target.value)
   }

   const history = useHistory()

   const token = window.localStorage.getItem("token")

   useEffect(() => {
     const token = window.localStorage.getItem("token")

     if (token === null) {
       history.push("/login")
     }
   }, [history])

   const handleCreate = () => {
    const body = {
      "name": name,
      "planet": planet,
      "date": date,
      "description": description,
      "durationInDays": durationInDays
    }

    axios
    .post(`${baseUrl}/trips`, body, 
      {
        headers: {
          auth: token
        }
      }
    )
    .then(response => {
      console.log(response.data.token)
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
              <Quit onClick={''} >X</Quit>
              <h2>Cria nova viagem</h2>
              <Field>
                <label>Nome</label>
                <input
                  type="text"
                  name="name"
                  onChange={onChangeName}
                  required
                />
              </Field>

              <Field>
                <label>Planeta</label>
                <input
                  type="text"
                  name="planet"
                  onChange={onChangePlanet}
                  required
                />
              </Field>

              <Field>
                <label>Data</label>
                <input
                  type="date"
                  name="date"
                  onChange={onChangeDate}
                  required
                />
              </Field>
              
              <Field>
                <label>Duração</label>
                <input
                  type="number"
                  name="durationInDays"
                  onChange={onChangeDurationInDays}
                  required
                />
              </Field>
              
              <Field>
                <label>Descrição</label>
                <textarea
                  name="description"
                  onChange={onChangeDescription}
                  required
                ></textarea>
              </Field>

              <Button onClick={handleCreate} variant="contained" color="primary">Criar</Button>
            </form>
          </ContainerForm>
       </Container>
   )
 }
 
 export default CreateTripPage;
