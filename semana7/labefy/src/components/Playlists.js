import React from "react"
import axios from "axios"
import styled from "styled-components"
import iconHome from "../icons/home.svg"
import iconPlus from "../icons/plus.svg"
import iconBrowse from "../icons/browse.svg"
import iconEllipsis from "../icons/ellipsis.svg"

const ContainerPlayList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #121212;
    color: #b3b3b3;
    height: 100vh;

    `

const Playlist = styled.div`
    margin: 0 16px;
    font-weight: 200;
    font-size: 14px;

    > p {
        
    }

    > ul {
        padding: 0;
    }

    > ul > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 16px 0;
        list-style: none;
        font-weight: 400;
    }

    > ul > li > img {
        width: 16px;
    }
`

const AddNewPlaylist = styled.div`
    border-top: 1px solid #282828;
    display: flex;
    padding: 16px;
    width: 100%;

    img {
            width: 16px;
            margin-right: 8px;
            cursor: pointer;
    }

`

const CreateNewPlaylist = styled.div`
    align-items: center;
    background-color: #282828;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    height: 180px;
    left: 35%;
    padding: 16px;
    position: fixed;
    top: 35%;
     width: 300px;

    > span {
        cursor: pointer;
        align-self: flex-end;
        justify-self: flex-start;
    }

    > input {
        margin: 10% 0;
        border: none;
        height: 20px;
        padding: 4px;
    }

    > button {
        background-color: #1db954;
        border: none;
        border-radius: 30px;
        font-weight: bold;
        color: #282828;
        height: 30px;
        width: 80px;
    }
`

class Playlists extends React.Component {
    state = {
        playlists: [],
        playlistValue: "",
        boxCreatePlaylist: false
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
        this.clickCreateBox()
    })
    .catch(error => {
        alert("Este nome já está sendo usado em outra playlist sua")
    })
    }

    onChangePlaylistVaue = event => {
        this.setState({playlistValue: event.target.value})
    }

    clickCreateBox = () => {
        this.setState({boxCreatePlaylist: !this.state.boxCreatePlaylist})
    }

  render() {
    return (
      <ContainerPlayList>
        <Playlist>
            <p>PLAYLISTIS</p>
            <ul list={this.state.playlists}>
                {this.state.playlists.map(playlist => {
                    return <li key={playlist.id}><span>{playlist.name}</span><img onClick={''} src={iconEllipsis} alt="icons ellipsis" /></li>
                })}
            </ul>
        </Playlist>

        {this.state.boxCreatePlaylist === false ? 
            <span></span>
        :
        <CreateNewPlaylist>
            <span onClick={this.clickCreateBox}>X</span>
            <h3>Create Playlist</h3>
            <input 
                type={"text"}
                value={this.state.playlistValue} 
                onChange={this.onChangePlaylistVaue}
                placeholder={"My playlist"}
                />
            <button onClick={this.createPlaylist} >Create</button>
        </CreateNewPlaylist>
        }

        <AddNewPlaylist>
            <img onClick={this.clickCreateBox} src={iconPlus} alt="icons plus" />
            <span>New Playlist</span>
        </AddNewPlaylist>
      </ContainerPlayList>
    )
  }
}

export default Playlists