import React from "react"
import axios from "axios"
import {CreateNewPlaylist} from './style'

class CreatePlaylist extends React.Component {
  state = {
    playlistValue: ""
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
        this.setState({playlistValue: ""})
        this.props.updateList()
        this.props.closeCreateBox()
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
        <CreateNewPlaylist>
            <span onClick={this.props.closeCreateBox}>X</span>
            <h3>Create Playlist</h3>
            <input 
                type={"text"}
                value={this.state.playlistValue}
                onChange={this.onChangePlaylistVaue}
                placeholder={"My playlist"}
                />
            <button onClick={this.createPlaylist} >Create</button>
        </CreateNewPlaylist>
    )
  }
}

export default CreatePlaylist