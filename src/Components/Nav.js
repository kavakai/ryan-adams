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
      <article className="home-button vibrate-2">
        <Link to="/" className="page-title" onClick={() =>setSingleAlbum({}) }>Ryan Adams</Link>
      </article>
      <article className="nav-btns">
        <Link to="/playlist" className="page-title vibrate-2" onClick={() => setSingleAlbum({})}>My PLaylist</Link>
        <Link to="/about" className="page-title vibrate-2" onClick={() => setSingleAlbum({})}>About</Link>
      </article>
    </>
  )
}

export default Nav