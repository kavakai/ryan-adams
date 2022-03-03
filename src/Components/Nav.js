import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { RyanContext } from "../Contexts/RyanContext";
import "./Nav.css"

const Nav = () => {

  const [active, setActive] = useState(false)
  const { albums, setSingleAlbum } = useContext(RyanContext);
  
  const toggle = () => {
    setActive(!active)
  }
  return (
    <>
      <div>
        <Link to="/" className="page-title" onClick={() =>setSingleAlbum({}) }>Ryan Adams</Link>
      </div>
      <Link to="/playlist" className="page-title" onClick={() => setSingleAlbum({})}>My PLaylist</Link>
      <Link to="/about" className="page-title" onClick={() => setSingleAlbum({})}>About</Link>
    </>
  )
}

export default Nav