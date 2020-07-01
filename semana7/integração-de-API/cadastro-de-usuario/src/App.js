import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'
import ListUsers from './components/ListUsers';
import icon from './icons/trash.svg'

const ButtonChange = styled.button`
  position:fixed;
  top:0;
  left: 0;
`

const EachUser = styled.div`
  margin: 60px auto;
  width: 300px;

  > div {
    align-items: center;
    border-bottom: 1px solid #283e4a;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 20px;
  }

  img:hover {
    color: red;
  }
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
        alert("O usuario foi adicionado com sucesso!")
      }
    ).catch(error => {
      console.log(error.data)
      alert("Não foi possível adicionar o usuário!")
    })
  }

  deleteUser = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
    {
      headers: {
        Authorization: "dienay-lima-turing"
        }
    }
      )
      .then(response => {
        this.getUser()
        alert("O usuario foi deletado com sucesso!")
      })
      .catch(error => {
        alert("Não foi possível deletar o usuário!")
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

  componentDidUpdate = () => {
    console.log(this.toExchangeComponent)
  }

  render() {
    return (
      <div className="App">
        <div>
          <ButtonChange 
          onClick={this.changeComponent}>Mudar a página</ButtonChange>
        </div>
        <div>
          {
          this.state.toExchangeComponent ? 
          <EachUser>
            <h2>Usuários Cadastrados:</h2>
            {this.state.userList.map(user => {
            return <div>
              <ListUsers
                key={user.id}
                mostraUser={user.name}
              />
              <button onClick={() => this.deleteUser(user.id)}>X</button>
            </div>
          })}
          </EachUser>
          :
          <ContainerForm>
            <Form>
                <div className="field">
                  <label>Nome</label>
                  <input
                    value={this.state.userValue}
                    onChange={this.onChangeUserValue}
                    placeholder={"Nome de Usuário"}
                  />
                </div>
                <div className="field">
                  <label>E-mail</label>
                  <input
                    value={this.state.emailValue}
                    onChange={this.onChangeEmailValue}
                    placeholder={"E-mail do usuário"}
                  />
                </div>
                <div className="field">
                  <button onClick={this.createUser}>Criar usuário</button>
                </div>
            </Form>
          </ContainerForm>
          }
        </div>
      </div>
    );
  }
}

export default App;
