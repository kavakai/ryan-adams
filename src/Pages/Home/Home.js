import React, { useContext } from "react";
import AlbumContainer from "../../Components/AlbumContainer";
import { RyanContext } from "../../Contexts/RyanContext";
import Error from "../Error/Error";
import "./Home.css"

const Home = () => {

  const { albums, loading, error } = useContext(RyanContext)

  const checkError = () => {
    if (error.length) {
      return (
        <section className="error">
          <Error />
        </section>
      )
    } else {
      return (
        <main className='main'>  
          {!loading && <AlbumContainer albums={albums} />}
        </main>
      )
    }
  }
  
  return (
    <>
      {checkError()}
    </>
  )
}

export default Home