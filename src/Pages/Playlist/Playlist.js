import React, { useContext } from "react"
import { RyanContext } from "../../Contexts/RyanContext"
import AlbumContainer from "../../Components/AlbumContainer"
import PlaylistContainer from "../../Components/PlaylistContainer"

const Playlist = () => {

  const { playlist } = useContext(RyanContext)

  return (
    <main className='main'>  
      <PlaylistContainer albums={playlist} />
    </main>
  )
}

export default Playlist