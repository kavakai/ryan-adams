import React, {useContext} from "react";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";
import Nav from "../../Components/Nav";
import "./AlbumInfo.css"


const AlbumInfo = () => {

  const { albums, playlist, setPlaylist, singleAlbum } = useContext(RyanContext)

  

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