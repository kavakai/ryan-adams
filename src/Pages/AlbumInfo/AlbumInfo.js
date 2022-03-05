import React, {useContext, useEffect} from "react";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";
import Nav from "../../Components/Nav";
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