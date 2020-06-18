import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    posts: [
      {
        nome: "paulinha",
        fotoUser: "https://picsum.photos/50/50?a=5",
        fotoPost: "https://picsum.photos/300/300?a=6"
      },
      {
        nome: "joãozinho",
        fotoUser: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/300/300?a=2"
      },{
        nome: "jonisverson",
        fotoUser: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/300/300?a=4"
      }
    ],

    valorInputUser: "",
    valorInputFotoUser: "",
    valorInputFotoPost: "" 
  }

  postar = () => {
    const novoPost = {
      nome: this.state.valorInputUser,
      fotoUser: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost
    }

    const postando = [...this.state.posts, novoPost]

    this.setState({posts: postando})
    this.setState({valorInputUser: "", valorInputFotoUser: "", valorInputFotoPost: ""})
  }

  onChangeUser = event => {
    this.setState({valorInputUser: event.target.value})
  }

  onChangeFotoUser = event => {
    this.setState({valorInputFotoUser: event.target.value})
  }

  onChangeFotoPost = event => {
    this.setState({valorInputFotoPost: event.target.value})
  }

  render() {
    return (
      <div className={'app-container'}>
        <div>
          <input
            value={this.state.valorInputUser}
            onChange={this.onChangeUser}
            placeholder={'Nome de usuário'}
          />
          <input
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeFotoUser}
            placeholder={'Foto do usuário'}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={'Foto do post'}
          />
          <button onClick={this.postar}>Postar</button>
        </div>
        {this.state.posts.map((post) => {
      // Porém, cada pessoa não é mais uma string somente, mas sim um objeto
      // com duas propriedades. Por isso, no momento de colocá-la na tela
      // precisamos explicitar qual das propriedades queremos mostrar em
      // cada lugar.
      return <Post
              nomeUsuario={post.nome}
              fotoUsuario={post.fotoUser}
              fotoPost={post.fotoPost}
            />
        })}
      </div>
    );
  }
}

export default App;
