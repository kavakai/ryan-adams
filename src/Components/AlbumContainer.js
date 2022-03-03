import React from "react";
import AlbumCard from "./AlbumCard";
import "./AlbumContainer.css"



const AlbumContainer = ({ albums }) => {

  const covers = albums.map(album => {
    return (
      <AlbumCard
        key={album.id}
        id={album.id}
        cover={album.image}
      />
    )
  })
  
  return (
    <section className='cover-container'>
      {covers}
    </section>
    
  )
}

export default AlbumContainer