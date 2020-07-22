 import React, { useEffect, useState } from 'react';
 import { ContainerCreatePage, Form, Field, FieldGroup, Quit } from './styled';
 import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
 
 function CreateTripPage() {
   return (
    <ContainerCreatePage>
           <Form>
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
          </Form>
       </ContainerCreatePage>
   )
 }
 
 export default CreateTripPage;
