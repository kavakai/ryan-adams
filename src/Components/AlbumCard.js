import React from "react";
import { Link } from "react-router-dom";

const AlbumCard = ({id, cover}) => {
  
  return (
    <Link to="/album" className="cover-link">
      <img src={cover} id={id}/>
    </Link>
  )
}

export default AlbumCard