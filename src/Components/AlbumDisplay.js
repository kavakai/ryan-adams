import React from "react";

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
      <article>
        <img src={singleAlbum.image} />
        <p>Released: {singleAlbum.releaseDate}</p>
      </article>
      <article>
        <h2>"{singleAlbum.title}"</h2>
        <p>{singleAlbum.description}</p>
        <button>Add to Playlist</button>
      </article>
      <article>
        <>{getTracks()}</>
      </article>
    </>
  )
}

export default AlbumDisplay