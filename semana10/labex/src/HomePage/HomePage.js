import React from 'react';
import { Container } from '../Common/Container/ContainerStyled'
import { ContainerHome } from './styled'
import SideBar from '../Common/Container/SideBar'

function HomePage() {

  return (
    <Container>
      <SideBar />
      <ContainerHome>
        <h1>Labe X</h1>
        <p>Encontre as melhores viagens espaciais!</p>
      </ContainerHome>
    </Container>
  )
}

export default HomePage; 
