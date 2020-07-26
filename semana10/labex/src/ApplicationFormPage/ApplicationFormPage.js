import React, { useEffect, useState }  from 'react';
import { Container,Form, FieldGroup, Field, ContainerForm, Quit } from '../Common/Styles/ContainerStyled'
import {Button} from '../Common/Styles/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import Countries from '../Countries/Countries';
import { baseUrl } from '../Common/CommonConst'
import useForm from '../Hooks/useForm'

function ApplicationFormPage() {
  const [list, setList] = useState([])

  const { form, onChange } = useForm({
    name: "",
    age: "",
    country: "",
    profession: "",
    applicationText: "",
    destiny: ""
  })

   const handleInputChange = event => {
     const { name, value } = event.target
     
     onChange(name, value)
    }

  const history = useHistory()

  const goToListTripsPage = () => {
    history.push("/list")
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

  const handleApplication = event => {
    event.preventDefault()
    const body = {
      "name": form.name,
      "age": form.age,
      "country": form.country,
      "profession": form.profession,
      "applicationText": form.applicationText
    }

    axios
    .post(`${baseUrl}/trips/${form.destiny}/apply`, body )
    .then(response => {
      console.log(response.data)
      history.push("/")
    })
    .catch(err => {
      console.log(err.message)
    })
  }
   return (
       <Container>
            <SideBar />
           <ContainerForm>
            <Form onSubmit={handleApplication} >
              <Quit onClick={goToListTripsPage} >X</Quit>
              <h2>Informações do candidato</h2>
              <Field>
                <label>Nome</label>
                <input
                  name="name"
                  onChange={handleInputChange}
                  pattern={"[A-Za-z]{3,}"}
                  placeholder="João"
                  required
                  title="O nome deve ter no mínimo 3 letras"
                  type="text"
                  value={form.name}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label>Idade</label>
                  <input
                    name="age"
                    min="18"
                    onChange={handleInputChange} 
                    placeholder="18"
                    required
                    type="number"
                    value={form.age}
                  />
                </Field>

                <Field>
                  <label>País</label>
                  <Countries
                    name="country"
                    onChangeCountry={handleInputChange}
                    value={form.country}
                  />
                </Field>
              </FieldGroup>
              
              <Field>
                <label>Profissão</label>
                <input
                  name="profession"
                  onChange={handleInputChange} 
                  pattern={"[^.]{10,}"}
                  placeholder="Artista"
                  required
                  type="text"
                  title="Deve ter no mínimo 10 caracteres"
                  value={form.profession}
                />
              </Field>
              
              <Field>
                <label>Porque sou um bom Candidato(a)</label>
                <input
                  name="applicationText"
                  onChange={handleInputChange}
                  pattern={"[^.]{30,}"}
                  placeholder="sou legal"
                  required
                  type="textarea"
                  title="Deve ter no mínimo 30 caracteres"
                  value={form.applicationText}
                />
              </Field>

              <Field>
                <label>Destino</label>
                <select onChange={handleInputChange} required name="destiny" value={form.destiny}>
                  <option value="" >Escolha seu destino</option>
                  {list.map(travel => {
                    return <option key={travel.id} value={travel.id}>{travel.name}</option>
                  })}
                </select>
              </Field>

              <Button>Candidatar-se</Button>
            </Form>
          </ContainerForm>
       </Container>
   )
}
 
export default ApplicationFormPage;
