import React, { useContext, useState } from "react";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumDisplay.css"

const AlbumDisplay = ({ singleAlbum, setPlaylist, albums, playlist }) => {

  const [message, setMessage] = useState('');

  const getTracks = () => {
    
    return singleAlbum.tracks.map((track, index) => {
      return (
        <div key={index}>
          <p>{track.title}: {track.length}</p>
        </div>
      )
    })
  }

  const handleClick = (id) => {
    const playlistAlbum = albums.find(album => album.id === id)
    let albumInPlaylist
    if (playlist.length >= 1) {
      albumInPlaylist = playlist.find(album => album.id === id)
    }
    if (!albumInPlaylist) {
      setPlaylist([...playlist, playlistAlbum])
      setMessage("You have added this album to your playlist")
    } else if (albumInPlaylist && playlistAlbum.id != albumInPlaylist.id) {
      setMessage("Album already in your playlist")
    } else {
      setMessage("Album already in your playlist")
    }
  }

  return (
    <>
      <article className="cover scrollbar">
        <img src={singleAlbum.image} alt={`${singleAlbum.title} album cover image`} />
        <p>Released: {singleAlbum.releaseDate}</p>
      </article>
      <article className="description scrollbar">
        <h2>"{singleAlbum.title}"</h2>
        <p>{singleAlbum.description}</p>
        {message ?
          <h3>{message}</h3> :
          <button className="add-playlist-btn" onClick={() => handleClick(singleAlbum.id)}>Add to Playlist</button>}
      </article>
      <article className="tracks scrollbar">
        <>{getTracks()}</>
        <p>Total length: {singleAlbum.runtime}</p>
      </article>
    </>
  )
}

export default AlbumDisplay