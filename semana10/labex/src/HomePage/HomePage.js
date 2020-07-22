import React from 'react';
import { ContainerHome } from './styled'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }

  const goToListTripsPage = () => {
    history.push("/list")
  }

  return (
    <ContainerHome>
      <sidebar>
        <Button onClick={goToLoginPage} color="secondary" >Login</Button>
        <Button onClick={goToListTripsPage} color="secondary" >Viagens</Button>
      </sidebar>
      <section>
        <h1>Labe X</h1>
        <p>Encontre as melhores viagens espaciais!</p>
      </section>
    </ContainerHome>
  )
}

export default HomePage; 
