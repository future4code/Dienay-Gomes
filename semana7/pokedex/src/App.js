import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  div {
  background-color: rgba(229, 229, 229, 1);
  height: 300px;
  width: 300px;
  }
`

export class App extends React.Component {
  state = {
    pokedex: [],
    currentPokemon: "",
    name: "",
    type: ""
  };

  componentDidMount = () => {
    this.getPokemons()
  };

  getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100")
    .then(response => {
      this.setState({ pokedex: response.data.results })
    })
    .catch (erro=> {
      console.log(erro.message)
    })
  }

  onChangePokemon = event => {
    const pokeName = event.target.value

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        this.setState({ currentPokemon: response.data.sprites.front_default })
        console.log(response.data.types[0].type.name)
        console.log(response.data.name)
      })
      .catch(erro => {
        console.log(erro.message)
      })
  }

  render() {
    return (
      <Container>
        <div>
          <select onChange={this.onChangePokemon}>
            <option value={""} />
            {this.state.pokedex.map(pokemon => {
              return (
                <option key={pokemon.name} value={pokemon.name}>
                  {" "}
                  {pokemon.name}
                </option>
              );
            })}
          </select>

          <div>
            {this.state.currentPokemon && (
              <img src={this.state.currentPokemon} alt="Pokemon" />
            )}
          </div>
        </div>          
      </Container>
    );
  }
}

export default App;
