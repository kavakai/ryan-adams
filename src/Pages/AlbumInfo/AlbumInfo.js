import React, {useContext} from "react";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";
import Nav from "../../Components/Nav";
import "./AlbumInfo.css"


const AlbumInfo = () => {

  const { singleAlbum } = useContext(RyanContext)

  

  return (
    <section className="single-container">
      <AlbumDisplay singleAlbum={singleAlbum} />
    </section>
  )
}

export default AlbumInfo