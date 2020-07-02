import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import icon from '../icons/trash.svg'

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const TitleUsers = styled.h2`
  margin-left:16px;
`

const Carregando = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .dots {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.dots div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: rgba(33, 159, 213, 1);
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
`

const List = styled.ul`
  margin: 60px auto;
  width: 300px;

  > li {
    align-items: center;
    border-bottom: 1px solid #283e4a;
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
  }

  img {
    width: 18px;
  }
`

class ListUsers extends React.Component {
    state = {
        userList: []
      }

    componentDidMount = () => {
        this.getUser()
    }
      
    getUser = () => {
        axios
        .get(
          baseUrl,
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

    deleteUser = (userId) => {
        if (window.confirm("Tem certeza que quer apagar esse usuário?")) {
          axios.delete(`${baseUrl}/${userId}`,
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
    }

    render() {
        return (
            <div>
                <TitleUsers>Usuários Cadastrados:</TitleUsers>
                <List>
                    {this.state.userList.length === 0 && <Carregando>
                      <div class="dots">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </Carregando>}
                    {this.state.userList.map(user => {
                        return (
                            <li key={user.id}>
                                {user.name}
                            <img src={icon} onClick={() => this.deleteUser(user.id)}/>
                            </li>
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default ListUsers