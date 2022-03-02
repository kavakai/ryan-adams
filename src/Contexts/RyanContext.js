import React, { createContext, useEffect, useState } from "react";
import getRyan from "../ApiCalls";

export const RyanContext = createContext();

const RyanProvider = (props) => {

  const [ryanData, setRyanData] = useState({});
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    console.log("click")
      getRyan()
        .then(data => console.log(data, 'data'))
        .catch(err => console.log(err))
  })

  const setData = (data) => {
    setRyanData(data)
    setAlbums(data.albums)
  }

  console.log(ryanData, 'in provider')
  const values =  { albums, setAlbums, ryanData, setRyanData }

  return (
    <RyanContext.Provider value={values} >
      {props.children}
    </RyanContext.Provider>
  )
}

export default RyanProvider