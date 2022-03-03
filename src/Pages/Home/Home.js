import React, { useContext } from "react";
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