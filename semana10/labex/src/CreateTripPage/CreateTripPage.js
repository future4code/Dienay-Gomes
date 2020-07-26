import React, { useEffect, useState } from 'react'
import { Container, Form, FieldGroup, Field, ContainerForm, Quit } from '../Common/Styles/ContainerStyled'
import { DateInput } from './styled'
import {Button} from '../Common/Styles/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import { baseUrl, axiosConfig} from '../Common/CommonConst'
 
 function CreateTripPage() {
   const [name, setName] = useState("")
   const [planet, setPlanet] = useState("")
   const [date, setDate] = useState("")
   const [description, setDescription] = useState("")
   const [durationInDays, setDurationInDays] = useState("")
   
   const [currentDate, setCurrentDate] = useState("")
   useEffect (() => {
      const data = new Date(),
      day  = (data.getDate()+1).toString().padStart(2, '0'),
      month  = (data.getMonth()+1).toString().padStart(2, '0'),
      year  = data.getFullYear()
      return setCurrentDate(year+"-"+month+"-"+day)
   },[])

   const onChangeName = event => {
     setName(event.target.value)
   }
   const onChangePlanet = event => {
    setPlanet(event.target.value)
   }
   const onChangeDate = event => {
    const date = new Date(event.target.value),
     day  = (date.getDate()+1).toString().padStart(2, '0'),
     month  = (date.getMonth()+1).toString().padStart(2, '0'),
     year  = date.getYear() - 100
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
     if (token === null) {
       history.push("/login")
     }
   }, [history])

   const handleCreate = event => {
    event.preventDefault()
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
      history.push("/details")
    })
    .catch(err => {
      console.log(err.message)
    })
  }
   return (
    <Container>
            <SideBar />
           <ContainerForm>
            <Form onSubmit={handleCreate}>
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
                    min={currentDate}
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
                    min="50"
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

              <Button>Criar</Button>
            </Form>
          </ContainerForm>
       </Container>
   )
 }
 
 export default CreateTripPage;
