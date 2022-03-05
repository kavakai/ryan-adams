import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { RyanContext } from "../Contexts/RyanContext";
import { getAlbum } from "../ApiCalls";
import "./AlbumCard.css"


const PlaylistCard = ({id, cover}) => {
  
  const { setSingleAlbum, playlist, setPlaylist } = useContext(RyanContext);

  const history = useHistory();

  const handleClick = (id) => {
    getAlbum(id)
      .then(data => setSingleAlbum(data))
    setTimeout(() => {
      changePage()
    }, 50)
  }
  const changePage = () => {
    history.push(`/album/${id}`)
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