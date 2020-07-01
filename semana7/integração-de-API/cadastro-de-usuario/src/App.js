import React from 'react';
import './App.css';
import styled from 'styled-components'
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';

const ButtonChange = styled.button`
  position:fixed;
  top:0;
  left: 0;
`

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Form = styled.div`
  background-color: #e5e5e5;
  box-shadow: #000000 0 0 4px;
  padding: 32px;
  border-radius: 8px;
  height: 300px;
  width: 300px;

  .field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 33%;
  }

  label {
    font-weight: bold;
    align-self: flex-start;
    margin-bottom: 8px;
  }

  input {
    border: none;
    border-radius: 4px;
    font-size: 20px;
    width: 100%;
    height: 28px;
  }
`


class App extends React.Component {
  state = {
    toExchangeComponent: true,
  }

  changeComponent = () => {
    this.setState({ toExchangeComponent: !this.state.toExchangeComponent })
  }


  render() {
    const buttonName =
      this.state.toExchangeComponent === false
        ? "Ir para lista"
        : "Ir para cadastro";
    return (
      <div className="App">
        <div>
          <ButtonChange 
          onClick={this.changeComponent}>{buttonName}</ButtonChange>
        </div>

        <div>
          {this.state.toExchangeComponent ?
          <ListUsers />
          :
          <CreateUser />
          }
        </div>
      </div>
    );
  }
}

export default App;
