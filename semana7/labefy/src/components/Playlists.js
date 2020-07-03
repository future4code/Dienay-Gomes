import React from "react"
import axios from "axios"




class Playlists extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  }

  componentDidMount = () => {
      this.getPlaylist()
  }

  getPlaylist = () => {
      axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
            headers: {
                Authorization: "dienay-lima-turing"
            }
        }
      )
      .then(response => {
          this.setState({playlists: response.data.result.list})
      })
      .catch(error => {
          console.log(error.message)
      })
  }

  createPlaylist = () => {
    const body = {
        name: this.state.playlistValue
    }

    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    body,
      {
        headers: {
            Authorization: "dienay-lima-turing"
        }
      }
    )
    .then(response => {
        this.getPlaylist()
        this.setState({playlistValue: ""})
    })
    .catch(error => {
        alert("Este nome já está sendo usado em outra playlist sua")
    })
    }

    onChangePlaylistVaue = event => {
        this.setState({playlistValue: event.target.value})
    }

  render() {
    return (
      <div>
        <section>
            <h2>Playlists</h2>
            <ul list={this.state.playlists}>
                {this.state.playlists.map(playlist => {
                    return <li key={playlist.id}>{playlist.name}</li>
                })}
            </ul>
        </section>

        <section>
            <h2>create Playlist</h2>
            <input 
                type={"text"}
                value={this.state.playlistValue} 
                onChange={this.onChangePlaylistVaue}
                placeholder={"My playlist"}
            />
            <button onClick={this.createPlaylist} >Create</button>
        </section>
      </div>
    )
  }
}

export default Playlists