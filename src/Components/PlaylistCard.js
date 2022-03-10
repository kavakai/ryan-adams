import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { RyanContext } from "../Contexts/RyanContext";
import { getAlbum } from "../ApiCalls";
import "./AlbumCard.css";


const PlaylistCard = ({ id, cover }) => {
  
  const { setSingleAlbum, playlist, setPlaylist } = useContext(RyanContext);

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/album/${id}`)
  };

  // const changePage = (id) => {
  //   history.push(`/album/${id}`)
  // };

  const remove = (id) => {
    const filtered = playlist.filter(album => album.id != id)
    setPlaylist([...filtered])
  };
  
  return (
    <section className="playlist-card">
      <button className="cover-link" data-testid="cover-img" onClick={() => handleClick(id)}>
        <img className="cover-link vibrate-2" src={cover} alt="album cover image" id={id} />
      </button>
      <button className="remove-btn" onClick={() => remove(id)}>Remove from Playlist</button>
    </section>
  )
};

export default PlaylistCard

PlaylistCard.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  setSingleAlbum: PropTypes.func,
  playlist: PropTypes.array.isRequired,
  setPlaylist: PropTypes.func
};

PlaylistCard.defaultProps = {
  playlist: [],
};