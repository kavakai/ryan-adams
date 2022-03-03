import React, { createContext, useEffect, useState } from "react";
import { getRyan } from "../ApiCalls";

export const RyanContext = createContext();

const RyanProvider = (props) => {

  const [ryanData, setRyanData] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleAlbum, setSingleAlbum] = useState({});
  const [playlist, setPlaylist] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
      getRyan()
      .then(data => setData(data))
      .catch(err => setError(err.message))
  }, [albums])

  const setData = (data) => {
    setRyanData(data);
    setAlbums(data.albums);
  }
  
  useEffect(() => {
    if (albums.length === 19) {
      setLoading(false)
    }
  }, [albums])
  
  const values =  { albums, setAlbums, ryanData, setRyanData, loading, setLoading, singleAlbum, setSingleAlbum, playlist, setPlaylist, error, setError }
  

  return (
    <RyanContext.Provider value={values} >
      {props.children}
    </RyanContext.Provider>
  )
}

export default RyanProvider