import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Form = styled.div`
  background-color: rgba(33, 159, 213, .4);
  box-shadow: #000000 0 0 2px;
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
    box-shadow: #000000 0 0 2px;
    border-radius: 4px;
    width: 100%;
    height: 28px;
  }

  button {
    border: none;
    border-radius: 4px;
    box-shadow: #000000 0 0 2px;
    font-weight: bold;
    padding: 8px;
  }
`

class CreateUser extends React.Component {
    state = {
        userValue: "",
        emailValue: ""
      }
    
      createNewUser = () => {
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
            alert("O usuario foi adicionado com sucesso!")
            this.setState({userValue: "", emailValue: ""})
          }
        ).catch(error => {
          console.log(error.message)
          alert("Não foi possível adicionar o usuário!")
        })
    }

    onChangeUserValue = event => {
        this.setState({userValue: event.target.value})
    }
    
    onChangeEmailValue = event => {
        this.setState({emailValue: event.target.value})
    }

    render() {
        return (
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
                  <button onClick={this.createNewUser}>Criar usuário</button>
                </div>
            </Form>
          </ContainerForm>
        )
    }
}

export default CreateUser