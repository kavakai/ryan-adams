import React, { useContext } from "react";
import PropTypes from "prop-types";
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
        <main>  
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

Home.propTypes = {
  albums: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
}

Home.defaultProps = {
  albums: [],
  loading: true,
  error: ''
}