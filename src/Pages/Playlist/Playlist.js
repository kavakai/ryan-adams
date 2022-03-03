import React, { useContext } from "react"
import { RyanContext } from "../../Contexts/RyanContext"
import AlbumContainer from "../../Components/AlbumContainer"

const Playlist = () => {

  const { playlist } = useContext(RyanContext)

  return (
    <main className='main'>  
      <AlbumContainer albums={playlist} />
    </main>
  )
}

export default Playlist