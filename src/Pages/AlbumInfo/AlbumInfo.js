import React, {useContext} from "react";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";
import Nav from "../../Components/Nav";
import "./AlbumInfo.css"


const AlbumInfo = () => {

  const { albums, singleAlbum } = useContext(RyanContext)

  

  return (
    <section>
      <header className='nav'>
        <Nav />
      </header>
      <section className="single-container">
        <AlbumDisplay singleAlbum={singleAlbum} />
      </section>
    </section>
  )
}

export default AlbumInfo