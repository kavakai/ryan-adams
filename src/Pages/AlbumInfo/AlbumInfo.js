import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";
import "./AlbumInfo.css"
import { getAlbum } from "../../ApiCalls";


const AlbumInfo = () => {

  const { albums, playlist, setPlaylist, singleAlbum, setSingleAlbum } = useContext(RyanContext)
  

  useEffect(() => {
    const id = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)
    getAlbum(id)
    .then(data => setSingleAlbum(data))
  })


  

  return (
    <section className="single-container">
      <AlbumDisplay
        singleAlbum={singleAlbum}
        albums={albums}
        playlist={playlist}
        setPlaylist={setPlaylist}
      />
    </section>
  )
}

export default AlbumInfo

AlbumInfo.propType = {
  singleAlbum: PropTypes.object.isRequired,
  albums: PropTypes.array.isRequired,
  playlist: PropTypes.array.isRequired,
  setPlaylist: PropTypes.func.isRequired,
  setSingleAlbum: PropTypes.func.isRequired
}

AlbumInfo.defaultProps = {
  singleAlbum: {},
  albums: [],
  playlist: [],
}