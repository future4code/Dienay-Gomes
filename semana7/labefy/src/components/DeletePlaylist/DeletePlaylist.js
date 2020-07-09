import React from "react"
import axios from "axios"
import {ContainerPlayer} from './style'


class DeletePlaylist extends React.Component {

  deletePlaylist = userId => {
        axios
    .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.userId}`,
        {
            headers: {
                Authorization: "dienay-lima-turing"
            }
        }
    )
    .then(response => {
        console.log(response.data)
        this.props.closeDeleteBox()
        this.props.updateList()
    })
    .catch(error => {
        console.log(error.message)
    })
}

  render() {
    return (
      <ContainerPlayer>
        <button onClick={this.props.closeDeleteBox}>Cancel</button>
        <button onClick={this.deletePlaylist}>Delete</button>
      </ContainerPlayer>
    )
  }
}

export default DeletePlaylist