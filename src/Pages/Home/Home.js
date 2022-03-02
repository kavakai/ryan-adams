import React, { useEffect, useState } from "react";
import { getRyan } from "../../ApiCalls";
import Nav from "../../Components/Nav";

const Home = () => {

  const [ryanData, setRyanData] = useState({});

  useEffect(() => {
    getRyan()
      .then(data => setRyanData(data))
      .catch(err => console.log(err))
  })

  return (
    <header>
      <Nav />
      <main>  
        {/* <AlbumContainer /> */}
      </main>
    </header>
  )
}

export default Home