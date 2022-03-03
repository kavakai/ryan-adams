import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumCard.css"


const PlaylistCard = ({id, cover}) => {
  
  const { albums, setSingleAlbum, playlist, setPlaylist } = useContext(RyanContext);

  const history = useHistory();

  const handleClick = (id) => {
    const albumInfo = albums.find(album => album.id === id)
    setSingleAlbum(albumInfo)
    history.push("/album")
  }

  const remove = (id) => {
    const filtered = playlist.filter(album => album.id != id)
    setPlaylist([...filtered])
  }
  
  return (
    <section className="playlist-card">
      <button className="cover-link" onClick={() => handleClick(id)}>
        <img className="cover-link vibrate-2" src={cover} alt="album cover image" id={id}/>
      </button>
      <button className="remove-btn" onClick={() => remove(id)}>Remove from Playlist</button>
    </section>
  )
}

export default PlaylistCard