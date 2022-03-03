import React, { useContext } from "react";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumDisplay.css"

const AlbumDisplay = ({ singleAlbum, setPlaylist, albums, playlist }) => {


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
    setPlaylist([...playlist, playlistAlbum])
    console.log(playlist, 'playlist')
  }

  return (
    <>
      <article className="cover">
        <img src={singleAlbum.image} alt={`${singleAlbum.title} album cover image`} />
        <p>Released: {singleAlbum.releaseDate}</p>
      </article>
      <article className="description">
        <h2>"{singleAlbum.title}"</h2>
        <p>{singleAlbum.description}</p>
        <button onClick={() => handleClick(singleAlbum.id)}>Add to Playlist</button>
      </article>
      <article className="tracks">
        <>{getTracks()}</>
        <p>Total length: {singleAlbum.runtime}</p>
      </article>
    </>
  )
}

export default AlbumDisplay