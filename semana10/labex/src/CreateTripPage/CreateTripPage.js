import React, { useEffect, useState } from 'react'
import { Container, Form, FieldGroup, Field, ContainerForm, Quit } from '../Common/Styles/ContainerStyled'
import { DateInput } from './styled'
import {Button} from '../Common/Styles/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import { baseUrl, axiosConfig} from '../Common/CommonConst'
import useForm from '../Hooks/useForm'


 function CreateTripPage() {
   const [date, setDate] = useState("")
   
   const { form, onChange } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
    })
   
   const handleInputChange = event => {
     const { name, value } = event.target
     
     onChange(name, value)
    }

   const [currentDate, setCurrentDate] = useState("")
   useEffect (() => {
      const data = new Date(),
      day  = (data.getDate()+1).toString().padStart(2, '0'),
      month  = (data.getMonth()+1).toString().padStart(2, '0'),
      year  = data.getFullYear()
      return setCurrentDate(year+"-"+month+"-"+day)
   },[])

   useEffect (() => {
    const date = new Date(form.date),
     day  = (date.getDate()+1).toString().padStart(2, '0'),
     month  = (date.getMonth()+1).toString().padStart(2, '0'),
     year  = date.getYear() - 100
     return setDate(day+"/"+month+"/"+year)
   },[form.date])

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
      "name": form.name,
      "planet": form.planet,
      "date": date,
      "description": form.description,
      "durationInDays": form.durationInDays
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
                  name="name"
                  onChange={handleInputChange}
                  required
                  type="text"
                  value={form.name}
                />
              </Field>

              <Field>
                <label>Planeta</label>
                <input
                  name="planet"
                  onChange={handleInputChange}
                  required
                  type="text"
                  value={form.planet}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label>Data</label>
                  <DateInput
                    name="date"
                    min={currentDate}
                    onChange={handleInputChange}
                    required
                    type="date"
                    value={form.date}
                  />
                </Field>
                
                <Field>
                  <label>Duração</label>
                  <input
                    name="durationInDays"
                    min="50"
                    onChange={handleInputChange}
                    required
                    type="number"
                    value={form.durationInDays}
                  />
                </Field>
              </FieldGroup>
              
              <Field>
                <label>Descrição</label>
                <textarea
                  name="description"
                  onChange={handleInputChange}
                  required
                  value={form.description}
                ></textarea>
              </Field>

              <Button>Criar</Button>
            </Form>
          </ContainerForm>
       </Container>
   )
 }
 
 export default CreateTripPage;
