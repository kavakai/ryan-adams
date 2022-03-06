import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { getAlbum } from "../ApiCalls";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumCard.css";


const AlbumCard = ({ id, cover }) => {
  
  const { setSingleAlbum } = useContext(RyanContext);

  const history = useHistory();

  const handleClick = (id) => {
    getAlbum(id)
      .then(data => setSingleAlbum(data))
    setTimeout(() => {
      changePage()
    }, 50)
  };
    
  const changePage = () => {
    history.push(`/album/${id}`)
  };

  
  return (
    <button className="cover-link" data-testid="cover-img" onClick={() => handleClick(id)}>
      <img className="cover-link vibrate-2" src={cover} alt="album cover image" id={id} />
    </button>
  )
};

export default AlbumCard

AlbumCard.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  setSingleAlbum: PropTypes.func
};