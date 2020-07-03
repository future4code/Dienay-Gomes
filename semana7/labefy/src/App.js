import React from 'react'
import Playlists from './components/Playlists'
import Musics from './components/Musics'

class App extends React.Component {
  render() {
    return (
      <div>
        <Playlists />

        <Musics />
      </div>
    )
  } 
}

export default App;
