import React, { useEffect, useState }  from 'react';
import { FieldGroup, Quit } from './styled';
import { Container, Field, ContainerForm } from '../Common/Container/ContainerStyled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';
import Countries from '../Countries/Countries';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dienay/trips"

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
    .get(baseUrl)
    .then(response => {
      setList(response.data.trips)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  const handleApplication = () => {
    const body = {
      "name": name,
      "age": age,
      "country": country,
      "profession": profession,
      "applicationText": applicationText
    }

    axios
    .post(`${baseUrl}/${destiny}/apply`, body )
    .then(response => {
      console.log(response.data)
      console.log("deu certo")
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
                <input
                  type="text"
                  placeholder="João"
                  onChange={onChangeName}
                />
              </Field>

              <FieldGroup>
                <Field>
                  <label>Idade</label>
                  <input
                    type="number"
                    placeholder="21"
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
                  type="text"
                  placeholder="Artista"
                  onChange={onChangeProfession} 
                />
              </Field>
              
              <Field>
                <label>Porque sou um bom Candidato(a)</label>
                <textarea
                  placeholder="sou legal"
                  onChange={onChangeApplicationText}
                ></textarea>
              </Field>

              <Field>
                <label>Destino</label>
                <select onChange={onChangeDestiny}>
                  {list.map(travel => {
                    return <option value={travel.id}>{travel.name}</option>
                  })}
                </select>
              </Field>

              <Button onClick={handleApplication} variant="contained" color="primary">Candidatar-se</Button>
            </form>
          </ContainerForm>
       </Container>
   )
}
 
export default ApplicationFormPage;
