import React, { useState } from 'react'
import { ContainerLogin } from './styled'
import { Quit } from '../Common/Styles/ContainerStyled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../Common/CommonConst'


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
          <form>
            <input value={email} onChange={onChangeEmail} type="email" placeholder="usuário/e-mail" />
            <input value={password} onChange={onChangePassword} type="password" placeholder="senha" />
            <Button onClick={handleLogin} variant="contained" color="primary">Entrar</Button>
          </form>
        </div>
    </ContainerLogin>
   )
 }
 
 export default LoginPage
