import React from "react";
import styled from "styled-components";
import axios from "axios";

const Carregando = styled.div`
  .loader {
  position: relative;
  }

  .outer,
  .middle,
  .inner {
    border: 3px solid transparent;
    border-top-color: #3cefff;
    border-right-color: #3cefff;
    border-radius: 50%;
    position: absolute;
    top: 155px;
    left: 50%;
  }

  .outer {
    width: 3.5em;
    height: 3.5em;
    margin-left: -1.75em;
    margin-top: -1.75em;
    animation: spin 2s linear infinite;
  }

  .middle {
    width: 2.1em;
    height: 2.1em;
    margin-left: -1.05em;
    margin-top: -1.05em;
    animation: spin 1.75s linear reverse infinite;
  }

  .inner {
    width: 0.8em;
    height: 0.8em;
    margin-left: -0.4em;
    margin-top: -0.4em;
    animation: spin 1.5s linear infinite;
  }

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
`

const Container = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  section {
  background-color: rgba(241, 248, 255, 1);
  box-shadow: 0 0 2px black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 32px;
  position: relative;
  width: 300px;
  }

  li {
    list-style: arrow;
  }

  span {
    font-weight: bold;
  }

  h1 {
    text-align: center;
    margin: 0;
  }

`

const ImagePokemon = styled.div`
  display: flex;
  justify-content: center;
`

const Select = styled.div`
  > div {
    bottom: 30px;
    position: absolute;
    padding: 0 16px;
  }

  > div > p {
    font-size: 12px;
  }

  select {
    border-radius: 4px;
    bottom: 16px;
    position: absolute;
    left: 135px;
  }
`

export class App extends React.Component {
  state = {
    pokedex: [],
    abilities: [],
    currentPokemon: "",
    name: "",
    type: "",
    height: "",
    weight: ""
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
        this.setState({ name: response.data.name})
        this.setState({ type: response.data.types[0].type.name })
        this.setState({ height: response.data.height})
        this.setState({ weight: response.data.weight})
        this.setState({ abilities: response.data.abilities})
      })
      .catch(erro => {
        console.log(erro.message)
      })
  }

  render() {
    return (
      <Container>
        <section>
          <h1>Pokédex</h1>
          {this.state.currentPokemon === "" ? 
            <Carregando>
              <div class="loader">
                <div class="outer"></div>
                <div class="middle"></div>
                <div class="inner"></div>
              </div>
            </Carregando>
          :
          <div>
            <p><span>Nome: </span>{this.state.name}</p>
            <p><span>Tipo: </span>{this.state.type}</p>
            <p><span>Tamanho: </span>{this.state.height}</p>
            <p><span>Peso: </span>{this.state.weight}</p>
            <p><span>Habilidades: </span></p>
            <ul>
              {this.state.abilities.map(ability => {
                return (
                <li key={ability.ability.name}>{ability.ability.name}</li>
                )
              })}
            </ul>
          </div>
          }

          <ImagePokemon>
            {this.state.currentPokemon && (
              <img src={this.state.currentPokemon} alt="Pokemon" />
            )}
          </ImagePokemon>

          <Select>
            <div>
              {this.state.currentPokemon === "" ? <p>Escolha um Pokemon para ver suas características</p> : <span></span>}
            </div>
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
          </Select>
        </section>          
      </Container>
    );
  }
}

export default App;
