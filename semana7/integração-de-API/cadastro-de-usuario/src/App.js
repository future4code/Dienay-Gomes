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

class App extends React.Component {
  state = {
    currentComponent: "ListUsers",
  }

  changeComponent = () => {
    if (this.state.currentComponent === "CreateUser") {
      this.setState({ currentComponent:  "ListUsers"})
    } else {
      this.setState({ currentComponent:  "CreateUser"})
    }
  }
  
  render() {
    const buttonName =
      this.state.currentComponent === "CreateUser"
        ? "Ir para lista"
        : "Ir para cadastro";

    const showRrendering = () => {
      switch (this.state.currentComponent) {
        case "CreateUser":
          return <CreateUser />
        case "ListUsers":
          return <ListUsers />
        default:
          return <p>Seja bem vindo(a)</p>;
      }
    }
    return (
      <div className="App">
        <div>
          <ButtonChange 
          onClick={this.changeComponent}>{buttonName}</ButtonChange>
        </div>

        <div>
          {showRrendering()}
        </div>
      </div>
    );
  }
}

export default App;
