import React from "react";
import AlbumCard from "./AlbumCard";



const AlbumContainer = ({ albums }) => {
  console.log(albums, 'in container')

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
    <section>
      {covers}
    </section>
    
  )
}

export default AlbumContainer