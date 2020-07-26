import React, { useEffect, useState }  from 'react';
import { Container,Form, FieldGroup, Field, ContainerForm, Quit } from '../Common/Styles/ContainerStyled'
import {Button} from '../Common/Styles/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import Countries from '../Countries/Countries';
import { baseUrl } from '../Common/CommonConst'

function ApplicationFormPage() {
  const [list, setList] = useState([])

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [country, setCountry] = useState("")
  const [profession, setprofession] = useState("")
  const [applicationText, setApplicationText] = useState("")
  const [destiny, setDestiny] = useState("")

   const onChangeName = event => {
     setName(event.target.value)
   }
   const onChangeAge = event => {
    setAge(event.target.value)
   }
   const onChangeCountry = event => {
    setCountry(event.target.value)
   }
   const onChangeProfession = event => {
    setprofession(event.target.value)
   }
   const onChangeApplicationText = event => {
    setApplicationText(event.target.value)
   }
   const onChangeDestiny = event => {
    setDestiny(event.target.value)
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
      "name": name,
      "age": age,
      "country": country,
      "profession": profession,
      "applicationText": applicationText
    }

    axios
    .post(`${baseUrl}/trips/${destiny}/apply`, body )
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
                  pattern={"[A-Za-z]{3,}"}
                  title="O nome deve ter no mínimo 3 letras"
                  required
                  type="text"
                  placeholder="João"
                  onChange={onChangeName}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label>Idade</label>
                  <input
                    required
                    type="number"
                    placeholder="18"
                    min="18"
                    onChange={onChangeAge} 
                  />
                </Field>

                <Field>
                  <label>País</label>
                  <Countries
                    onChangeCountry={onChangeCountry}
                  />
                </Field>
              </FieldGroup>
              
              <Field>
                <label>Profissão</label>
                <input
                  pattern={"[A-Za-z]{10,}"}
                  title="Deve ter no mínimo 10 caracteres"
                  required
                  type="text"
                  placeholder="Artista"
                  onChange={onChangeProfession} 
                />
              </Field>
              
              <Field>
                <label>Porque sou um bom Candidato(a)</label>
                <textarea
                  required
                  pattern={"[A-Za-z]{30,300}"}
                  title="Deve ter no mínimo 30 caracteres"
                  placeholder="sou legal"
                  onChange={onChangeApplicationText}
                ></textarea>
              </Field>

              <Field>
                <label>Destino</label>
                <select onChange={onChangeDestiny} required>
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
