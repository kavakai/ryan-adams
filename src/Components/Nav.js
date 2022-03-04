import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { RyanContext } from "../Contexts/RyanContext";
import "./Nav.css"

const Nav = () => {

  
  const { albums, setSingleAlbum } = useContext(RyanContext);
  
  return (
    <>
      <article className="home-button">
        <Link to="/" className="page-title" onClick={() =>setSingleAlbum({}) }>Ryan Adams</Link>
      </article>
      <article className="nav-btns">
        <Link to="/playlist" className="page-title" onClick={() => setSingleAlbum({})}>My Playlist</Link>
        <Link to="/about" className="page-title" onClick={() => setSingleAlbum({})}>About</Link>
      </article>
    </>
  )
}

export default Nav