import React, {useContext} from "react";
import { RyanContext } from "../../Contexts/RyanContext";
import AlbumDisplay from "../../Components/AlbumDisplay";


const AlbumInfo = () => {

  const { albums, singleAlbum } = useContext(RyanContext)

  console.log(singleAlbum)

  return (
    <section>
      <AlbumDisplay albums={albums}  />
    </section>
  )
}

export default AlbumInfo