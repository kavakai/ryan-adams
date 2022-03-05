import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAlbum } from "../ApiCalls";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumCard.css"


const AlbumCard = ({id, cover}) => {
  
  const { albums, singleAlbum, setSingleAlbum } = useContext(RyanContext);

  const history = useHistory();

  const handleClick = (id) => {
    // const albumInfo = albums.find(album => album.id === id)
    getAlbum(id)
      .then(data => setSingleAlbum(data))
      console.log(singleAlbum)
    setTimeout(() => {
      changePage()
    }, 100)
    }
    
  const changePage = () => {
      history.push(`/album/${id}`)
  }

  
  return (
    <button className="cover-link" data-testid="cover-img" onClick={() => handleClick(id)}>
      <img className="cover-link vibrate-2" src={cover} alt="album cover image" id={id}/>
    </button>
  )
}

export default AlbumCard