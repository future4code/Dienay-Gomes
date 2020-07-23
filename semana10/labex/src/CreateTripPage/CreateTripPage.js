 import React, { useEffect, useState } from 'react';
 import { Form, Quit } from './styled';
 import { Container, Field, ContainerForm} from '../Common/Container/ContainerStyled'
 import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import SideBar from '../Common/Container/SideBar';

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dienay"
 
 function CreateTripPage() {
   const history = useHistory()

   useEffect(() => {
     const token = window.localStorage.getItem("token")

     if (token === null) {
       history.push("/login")
     }
   }, [history])
   return (
    <Container>
            <SideBar />
           <ContainerForm>
            <form>
              <Quit onClick={''} >X</Quit>
              <h2>Cria nova viagem</h2>
              <Field>
                <label>Nome</label>
                <input type="text" />
              </Field>

              <Field>
                <label>Planeta</label>
                <input type="text" />
              </Field>

              <Field>
                <label>Data</label>
                <input type="text" />
              </Field>
              
              <Field>
                <label>Duração</label>
                <input type="text" />
              </Field>
              
              <Field>
                <label>Descrição</label>
                <textarea></textarea>
              </Field>

              <Button onClick={''} variant="contained" color="primary">Criar</Button>
            </form>
          </ContainerForm>
       </Container>
   )
 }
 
 export default CreateTripPage;