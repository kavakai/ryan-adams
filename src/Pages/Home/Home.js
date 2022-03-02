import React, { useContext, useEffect, useState } from "react";
import { getRyan } from "../../ApiCalls";
import Nav from "../../Components/Nav";
import AlbumContainer from "../../Components/AlbumContainer";
import { RyanContext } from "../../Contexts/RyanContext";
import "./Home.css"

const Home = () => {

  const { albums, ryanData, loading, setLoading } = useContext(RyanContext)


  return (
    <section className="body">
      <header className='nav'>
        <Nav />
      </header>
        <main className='main'>  
          {!loading && <AlbumContainer albums={albums} />}
        </main>
    </section>
  )
}

export default Home