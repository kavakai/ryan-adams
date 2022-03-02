import React, { useContext, useEffect, useState } from "react";
import { getRyan } from "../../ApiCalls";
import Nav from "../../Components/Nav";
import AlbumContainer from "../../Components/AlbumContainer";
import { RyanContext } from "../../Contexts/RyanContext";

const Home = () => {

  const { albums, ryanData, loading, setLoading } = useContext(RyanContext)

console.log(loading)

  return (
    <header>
      <Nav />
      <main>  
        {!loading && <AlbumContainer albums={albums} />}
      </main>
    </header>
  )
}

export default Home