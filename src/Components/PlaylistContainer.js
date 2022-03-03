import React from "react";

import "./AlbumContainer.css"
import PlaylistCard from "./PlaylistCard";



const PlaylistContainer = ({ albums }) => {

  const covers = albums.map(album => {
    return (
      <PlaylistCard
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

export default PlaylistContainer