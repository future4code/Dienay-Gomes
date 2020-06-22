import React from 'react';
import DadosGerais from './components/DadosGerais';
import Informacoes from './components/Informacoes';
import Complemento from './components/Complemento';
import Finalizado from './components/Finalizado';
import styled from 'styled-components'

const AppContainer = styled.div `
  margin-left: auto;
  margin-right: auto;
  width: 500px;

  h1 {
    font-size: 24px;
    text-align: center;
  }

  p {
    text-align: center;
  }

  fieldset {
    border: none;
  }

  .field {
    display: grid;
    justify-content: center;
  }

  label {
    margin-bottom: 8px;
    justify-self: center;
  }

  input {
    margin-bottom: 16px;
    width: 200px;
    justify-self: center;
  }

  select {
    margin-bottom: 16px;
  }

  button {
    width: 150px;
  }

`

const Proximo = styled.button `
  display: ${props => {
      if (props.esconder === 4) {
        return "none"
      } 
    }
  };
`

class App extends React.Component {

  state = {
    etapa: 1,
  }

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1});
  }

  render () {

    const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <DadosGerais />
        case 2:
          return <Informacoes />
        case 3:
          return <Complemento />
          case 4:
            return <Finalizado />
          default:
          return <p>Seja bem vindo(a)</p>;
      }
    }

    return (
      <AppContainer>
        {renderizaEtapa()}
        <div class="field">
          <Proximo onClick={this.proximaEtapa} esconder={this.state.etapa}>Próxima etapa</Proximo>
        </div>
      </AppContainer>
    )
  }
}

export default App;
