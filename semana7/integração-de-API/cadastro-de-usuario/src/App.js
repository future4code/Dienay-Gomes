import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'

class App extends React.Component {
  state = {
    userList: [],
    userValue: "",
    emailValue: "",
    toExchangeComponent: false,
  }

  componentDidMount = () => {
    this.getUser()
  }
  
  getUser = () => {
    axios
    .get(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      {
        headers: {
          Authorization: 'dienay-lima-turing'
        }
      }
      ).then(response => {
        this.setState({userList: response.data})
      }).catch(error => {
        console.log(error.data)
      })
  }

  createUser = () => {
    const body = {
      name: this.state.userValue,
      email: this.state.emailValue
    }

    axios
    .post(
      'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body,
      {
        headers: {
          Authorization: 'dienay-lima-turing'
        }
      }).then(response => {
        this.getUser()
        this.setState({userValue: ""})
        this.setState({emailValue: ""})
      }
    ).catch(error => {
      console.log(error.data)
    })
  }

  changeComponent = () => {
    this.setState({ toExchangeComponent: !this.state.toExchangeComponent })
  }

  onChangeUserValue = event => {
    this.setState({userValue: event.target.value})
  }

  onChangeEmailValue = event => {
    this.setState({emailValue: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <div>
          <input
            value={this.state.userValue}
            onChange={this.onChangeUserValue}
            placeholder={"Nome de Usuário"}
          />
          <input
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
            placeholder={"E-mail do usuário"}
          />
          <button onClick={this.createUser}>Criar usuário</button>
        </div>
        <div>
          {this.state.userList.map(user => {
            return <p>{user.name}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
