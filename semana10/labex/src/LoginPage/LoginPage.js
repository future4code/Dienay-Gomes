import React from 'react'
import { ContainerLogin, Quit } from './styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

 function LoginPage() {
   const history = useHistory()

   const goToHomePage = () => {
     history.push("/")
   }

   const goToCreateTripPage = () => {
     history.replace("/create")
   }

   return (
    <ContainerLogin>
        <div>
          <Quit onClick={goToHomePage} >X</Quit>
          <h2>Login</h2>
          <input type="text" placeholder="usuário/e-mail" />
          <input type="text" placeholder="senha" />
          <Button onClick={goToCreateTripPage} variant="contained" color="primary">Entrar</Button>
        </div>
    </ContainerLogin>
   )
 }
 
 export default LoginPage
