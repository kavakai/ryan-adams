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
  
  const checkCovers = () => {
    if (covers.length) {
      return covers
    } else {
      return (
      <>
        <h2 className="add-statement">Add some albums to you playlist</h2>
        </>
      )}
  }

  return (
    <section className='cover-container'>
      {checkCovers()}
    </section>
    
  )
}

export default PlaylistContainer