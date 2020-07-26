import React from 'react'
import { ContainerLogin } from './styled'
import { Quit } from '../Common/Styles/ContainerStyled'
import {Button} from '../Common/Styles/Button'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../Common/CommonConst'
import useForm from '../Hooks/useForm'

 function LoginPage() {
   const { form, onChange } = useForm({ email: "", password: ""})
   
   const handleInputChange = event => {
     const { name, value } = event.target
     
     onChange(name, value)
    }

   const history = useHistory()

   const handleLogin = event => {
    event.preventDefault()
     const body = {
       email: form.email,
       password: form.password
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
          <form onSubmit={handleLogin}>
            <input
              value={form.email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <input
              value={form.password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="senha"
              required
            />
            <Button>Entrar</Button>
          </form>
        </div>
    </ContainerLogin>
   )
 }
 
 export default LoginPage
