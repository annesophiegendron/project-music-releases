import React from 'react'
import data from './data.json'
import stretchgoal from './stretchgoal'
import { Album } from './components/Album'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './App.css'

console.log(data)

export const App = () => {
  return (
    <div>
      <div>
        <Header className="headerContainer" />
      </div>
      <div className="albumComponent">
        {data.albums.items.map((item) => (
          <Album
            key={item.id}
            albumTitle={item.name}
            urlArtistName={item.artists[0].external_urls.spotify}
            image={item.images[1].url}
            artistName={item.artists[0].name}
            urlAlbumTitle={item.external_urls.spotify} />
        ))}
      </div>
      <div className="sidebarComponent">
        <div className="playlistTitle">
          <h4>popular playlist</h4>
        </div>
        {stretchgoal.playlists.items.map((item) => (
          <Sidebar
            key={item.id}
            playlistName={item.name}
            urlPlaylistName={item.external_urls.spotify}
            urlPlaylistImage={item.images[1]}
          />
        ))}
      </div>
    </div>
  )
}