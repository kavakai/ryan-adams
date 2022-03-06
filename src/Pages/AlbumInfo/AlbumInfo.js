import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";
import Error from "../Error/Error";
import "./AlbumInfo.css";
import { getAlbum } from "../../ApiCalls";


const AlbumInfo = () => {

  const { albums, playlist, setPlaylist, singleAlbum, setSingleAlbum, error, setError, loading, setLoading } = useContext(RyanContext);
  
  useEffect(() => {
    const getAlbumInfo = async () => {
      const id = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)
      await getAlbum(id)
        .then(data => {
          setSingleAlbum(data)
          setLoading(false)
        })
      .catch(err => setError(err.message))
    }
    getAlbumInfo()
  }, []);

  const checkError = () => {
    if (error) {
      return (
        <section className="error">
          <Error />
        </section>
      )
    } else {
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
  };

  return (
    <>
      {!loading && checkError()}
    </>
  );
};

export default AlbumInfo

AlbumInfo.propType = {
  singleAlbum: PropTypes.object.isRequired,
  albums: PropTypes.array.isRequired,
  playlist: PropTypes.array.isRequired,
  setPlaylist: PropTypes.func.isRequired,
  setSingleAlbum: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  setError: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired
};

AlbumInfo.defaultProps = {
  singleAlbum: {},
  albums: [],
  playlist: [],
  error: ''
};