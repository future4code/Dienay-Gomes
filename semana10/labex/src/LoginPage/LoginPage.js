import React, { useState } from 'react'
import { ContainerLogin, Quit } from './styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/dienay"

 function LoginPage() {
   const [email, setEmail] = useState("")
   const [password, setPassword] =useState("")
   const history = useHistory()

   const onChangeEmail = event => {
     setEmail(event.target.value)
   }

   const onChangePassword = event => {
     setPassword(event.target.value)
   }

   const handleLogin = () => {
     const body = {
       email: email,
       password: password
     }

     axios
     .post(`${baseUrl}/login`, body)
     .then(response => {
       window.localStorage.setItem("token", response.data.token)
       history.replace("/")
     })
     .catch(err => {
       console.log(err.message)
     })
   }

   const goToHomePage = () => {
    history.push("/")
  }

   return (
    <ContainerLogin>
        <div>
          <Quit onClick={goToHomePage} >X</Quit>
          <h2>Login</h2>
          <input value={email} onChange={onChangeEmail} type="text" placeholder="usuário/e-mail" />
          <input value={password} onChange={onChangePassword} type="text" placeholder="senha" />
          <Button onClick={handleLogin} variant="contained" color="primary">Entrar</Button>
        </div>
    </ContainerLogin>
   )
 }
 
 export default LoginPage
