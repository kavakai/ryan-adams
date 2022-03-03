import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumCard.css"


const PlaylistCard = ({id, cover}) => {
  
  const { albums, setSingleAlbum } = useContext(RyanContext);

  const history = useHistory();

  const handleClick = (id) => {
    const albumInfo = albums.find(album => album.id === id)
    setSingleAlbum(albumInfo)
    history.push("/album")
  }
  
  return (
    <div>
      <button className="cover-link" onClick={() => handleClick(id)}>
        <img className="cover-link vibrate-2" src={cover} alt="album cover image" id={id}/>
      </button>
      <button>Remove from Playlist</button>
    </div>
  )
}

export default PlaylistCard