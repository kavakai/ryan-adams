import React, { useContext, useEffect, useState } from "react";
import { getRyan } from "../../ApiCalls";
import Nav from "../../Components/Nav";
import AlbumContainer from "../../Components/AlbumContainer";
import { RyanContext } from "../../Contexts/RyanContext";

const Home = () => {

    const {albums, ryanData} = useContext(RyanContext)

  console.log(albums)

  return (
    <header>
      <Nav />
      <main>  
        <AlbumContainer albums={albums}/>
      </main>
    </header>
  )
}

export default Home