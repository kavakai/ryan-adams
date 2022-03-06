import React from "react";
import PropTypes from "prop-types";
import "./AlbumContainer.css";
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
  });
  
  const checkCovers = () => {
    if (covers.length) {
      return covers
    } else {
      return (
        <section className="add-some-container">
          <h2 className="add-statement">Add some albums and let's start listening</h2>
        </section>
      )
    }
  };

  return (
    <section className='cover-container'>
      {checkCovers()}
    </section>
    
  )
};

export default PlaylistContainer

PlaylistContainer.propTypes = {
  albums: PropTypes.array.isRequired
};