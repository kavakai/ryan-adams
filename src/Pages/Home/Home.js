import React, { useContext, useEffect, useState } from "react";
import { getRyan } from "../../ApiCalls";
import Nav from "../../Components/Nav";
import AlbumContainer from "../../Components/AlbumContainer";
import { RyanContext } from "../../Contexts/RyanContext";
import "./Home.css"

const Home = () => {

  const { albums, loading } = useContext(RyanContext)


  return (
    <main className='main'>  
      {!loading && <AlbumContainer albums={albums} />}
    </main>
  )
}

export default Home