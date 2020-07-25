import React, { useEffect, useState } from 'react'
import { Container, Form, FieldGroup, Field, ContainerForm, Quit } from '../Common/Container/ContainerStyled'
import { DateInput } from './styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import { baseUrl, token, axiosConfig} from '../Common/CommonConst'
 
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

   useEffect(() => {
     

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
    .post(`${baseUrl}/trips`, body, axiosConfig)
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
            <Form>
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

              <FieldGroup>
                <Field>
                  <label>Data</label>
                  <DateInput
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
              </FieldGroup>
              
              <Field>
                <label>Descrição</label>
                <textarea
                  name="description"
                  onChange={onChangeDescription}
                  required
                ></textarea>
              </Field>

              <Button onClick={handleCreate} variant="contained" color="primary">Criar</Button>
            </Form>
          </ContainerForm>
       </Container>
   )
 }
 
 export default CreateTripPage;
