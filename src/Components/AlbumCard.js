import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { RyanContext } from "../Contexts/RyanContext";
import "./AlbumCard.css"


const AlbumCard = ({id, cover}) => {
  
  const { albums, setSingleAlbum } = useContext(RyanContext)

  const handleClick = (id) => {
    const albumInfo = albums.find(album => album.id === id)
    setSingleAlbum(albumInfo)
  }

  return (
    <Link to="/album" className="cover-link" onClick={() => handleClick(id)}>
      <img src={cover} id={id}/>
    </Link>
  )
}

export default AlbumCard