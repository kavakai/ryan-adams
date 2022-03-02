import React, { createContext, useEffect, useState } from "react";
import { getRyan } from "../ApiCalls";

export const RyanContext = createContext();

const RyanProvider = (props) => {

  const [ryanData, setRyanData] = useState({});
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      getRyan()
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  const setData = (data) => {
    setRyanData(data);
    setAlbums(data.albums);
  }
  
  useEffect(() => {
    if (albums.length === 19) {
      setLoading(false)
    }
  }, [albums])
  
  const values =  { albums, setAlbums, ryanData, setRyanData, loading, setLoading }
  

  return (
    <RyanContext.Provider value={values} >
      {props.children}
    </RyanContext.Provider>
  )
}

export default RyanProvider