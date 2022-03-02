import React from "react";

const AlbumCard = ({id, cover}) => {
  
  return (
    <article>
      <img src={cover} id={id}/>
    </article>
  )
}

export default AlbumCard