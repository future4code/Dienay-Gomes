import React from "react"
import axios from "axios"
import {Container, ContainerPlayList, Playlist, TopPlaylist, AddNewPlaylist, Musics} from './style'
import iconHome from "../../icons/home.svg"
import iconPlus from "../../icons/plus.svg"
import iconBrowse from "../../icons/browse.svg"
import iconTrash from "../../icons/trash.svg"
import CreatePlaylist from "../CreatePlaylist/CreatePlaylist"
import DeletePlaylist from "../DeletePlaylist/DeletePlaylist"
import AddMusic from "../AddMusic/AddMusic"


class Playlists extends React.Component {
    state = {
        playlists: [],
        tracks: [],
        boxCreatePlaylist: false,
        boxDeletePlaylist: false,
        boxAddMusic: false,
        userId: "",
        musicId:"",
        name: "",
        artist: "",
        url: ""
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

    getTracks = userId => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${userId}/tracks`,
          {
            headers: {
              Authorization: "dienay-lima-turing"
            }
          }
        )
        .then(response => {
            this.setState({userId: userId})
            this.setState({tracks: response.data.result.tracks})
        })
        .catch(error => {
          console.log(error.message)
        })
      }

    catchIdForDelete = userId => {
        this.setState({userId: userId})
        this.clickDeleteBox()
    }

    catchMusicIdForDelete = musicId => {
        if(window.confirm("Tem certeza que quer apagar essa música?")) {
            axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.userId}/tracks/${musicId}`,
            {
                headers: {
                    Authorization: "dienay-lima-turing"
                }
            }
        )
        .then(response => {
            console.log(response.data)
            this.getPlaylist()
            this.getTracks()
        })
        .catch(error => {
            console.log(error.message)
        })
        }
    }

    addMusic = () => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }
    
        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.userId}/tracks`,
        body,
          {
            headers: {
                Authorization: "dienay-lima-turing"
            }
          }
        )
        .then(response => {
            this.setState({name: "", artist: "", url: ""})
            this.setState({boxAddMusic: !this.state.boxAddMusic})
            this.getPlaylist()
            console.log(response)
        })
        .catch(error => {
            console.log(error.message)
        })
        }
    
        onChangeNameVaue = event => {
            this.setState({name: event.target.value})
        }
    
        onChangeArtistVaue = event => {
            this.setState({artist: event.target.value})
        }
    
        onChangeUrlVaue = event => {
            this.setState({url: event.target.value})
        }

    clickCreateBox = () => {
        this.setState({boxCreatePlaylist: !this.state.boxCreatePlaylist})
    }

    clickDeleteBox = () => {
        this.setState({boxDeletePlaylist: !this.state.boxDeletePlaylist})
    }

    clickAddMusicBox= () => {
        this.setState({boxAddMusic: !this.state.boxAddMusic})
    }

  render() {
    return (
      <Container>
            <ContainerPlayList>
                <Playlist>
                    <TopPlaylist>
                        <div>
                            <img src={iconHome} alt="icons plus" />
                            <p>Home</p>
                        </div>
                        <div>
                            <img src={iconBrowse} alt="icons plus" />
                            <p>Browse</p>
                        </div>
                    </TopPlaylist>
                    <p>PLAYLISTIS</p>
                    <ul>
                        {this.state.playlists.map(playlist => {
                            return  (
                                <li key={playlist.id}>
                                    <span onClick={() => this.getTracks(playlist.id)} >{playlist.name}</span>
                                    <img onClick={() => this.catchIdForDelete(playlist.id)} src={iconTrash} alt="icons trash" />
                                </li>
                            )
                        })}
                    </ul>
                </Playlist>

                {this.state.boxCreatePlaylist === false ? 
                    <span></span>
                :
                    <CreatePlaylist 
                        closeCreateBox={this.clickCreateBox}
                        createPlaylistBox={this.createPlaylist}
                        updateList={this.getPlaylist}
                    />
                }

                {this.state.boxDeletePlaylist === false ? 
                    <span></span>
                :
                    <DeletePlaylist
                        userId={this.state.userId}
                        closeDeleteBox={this.clickDeleteBox}
                        updateList={this.getPlaylist}
                    />
                }

                <AddNewPlaylist onClick={this.clickCreateBox} >
                    <img src={iconPlus} alt="icons plus" />
                    <span>New Playlist</span>
                </AddNewPlaylist>
            </ContainerPlayList>
           
            <Musics>
                {this.state.boxAddMusic === false ?
                    <div onClick={this.clickAddMusicBox}>
                        <img src={iconPlus} alt="icons plus" />
                    </div>
                :
                    <section>
                        <AddMusic
                            nameValue={this.state.name}
                            artistValue={this.state.artist}
                            urlValue={this.state.url}

                            nameOnChange={this.onChangeNameVaue}
                            artistOnChange={this.onChangeArtistVaue}
                            urlOnChange={this.onChangeUrlVaue}

                            closeAddMusic={this.clickAddMusicBox}
                            addMusic={this.addMusic}
                        />
                    </section>
                }
                <ul>
                    <li>
                        <div>
                            <span>Name</span>
                            <span>Artist</span>
                            <span></span>
                        </div>
                    </li>
                    {this.state.tracks.map(track => {
                        return (
                            <li key={track.id}>
                                <div>
                                    <span>{track.name}</span>
                                    <span>{track.artist}</span>
                                    <img onClick={() => this.catchMusicIdForDelete(track.id)} src={iconTrash} alt="icons trash" />
                                </div>
                                <audio src={track.url} controls>
                                    O seu navegador não suporta o elemento <code>audio</code>.
                                </audio>
                            </li>
                        )
                    })}
                </ul>
            </Musics>
      </Container>
    )
  }
}

export default Playlists