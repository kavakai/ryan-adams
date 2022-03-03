import React from "react";
import "./AlbumDisplay.css"

const AlbumDisplay = ({ singleAlbum }) => {

  const getTracks = () => {
    return singleAlbum.tracks.map((track, index) => {
      return (
        <div key={index}>
          <p>{track.title}: {track.length}</p>
        </div>
      )
    })
  }

  return (
    <>
      <article className="cover">
        <img src={singleAlbum.image} />
        <p>Released: {singleAlbum.releaseDate}</p>
      </article>
      <article className="description">
        <h2>"{singleAlbum.title}"</h2>
        <p>{singleAlbum.description}</p>
        <button>Add to Playlist</button>
      </article>
      <article className="tracks">
        <>{getTracks()}</>
        <p>Total length: {singleAlbum.runtime}</p>
      </article>
    </>
  )
}

export default AlbumDisplay