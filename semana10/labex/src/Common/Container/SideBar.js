import React, { useEffect, useState } from 'react';
import { ContainerSideBar } from '../Styles/ContainerStyled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

function SideBar() {
  const [loginLogout, setLoginLogout] = useState(true)
  const history = useHistory()

  const goToHomePage = () => {history.push("/")}
  const goToLoginPage = () => {
    history.push("/login")
    handleLoginLogout()
  }
  const goToListTripsPage = () => {history.push("/list")}
  const goToApplicationFormPage = () => {history.push("/application-form")}
  const goToCreatePage = () => {history.push("/create")}
  const goToTripDetailsPage = () => {history.push("/details")}

  useEffect(() => {
    handleLoginLogout()
  }, [])

  const handleLoginLogout = () => {
    const token = window.localStorage.getItem("token")

    if (token === null) {
      setLoginLogout(false)
    } else {
      setLoginLogout(true)
    }
  }

  const handleLogout = () => {
    window.localStorage.clear();
    history.push("/");
    handleLoginLogout()
  }

  return (
    <ContainerSideBar>
      <div>
        <Button onClick={goToHomePage} color="secondary" >Home</Button>

        {loginLogout === false ?
          <Button onClick={goToListTripsPage} color="secondary" >Viagens</Button>
        :
          <Button onClick={goToTripDetailsPage} color="secondary" >Detalhe de viagens</Button>
        }

        {loginLogout === false ?
          <Button onClick={goToApplicationFormPage} color="secondary" >Candidatar-se</Button>
        :
          <Button onClick={goToCreatePage} color="secondary" >Criar Viagem</Button>
        }

        {loginLogout === false ?
          <Button onClick={goToLoginPage} color="secondary" >Login</Button>
        :
          <Button onClick={handleLogout} color="secondary" >Logout</Button>
        }
      </div>
    </ContainerSideBar>
  )
}

export default SideBar; 
