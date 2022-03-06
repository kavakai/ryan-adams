import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { RyanContext } from "../Contexts/RyanContext";
import "./Nav.css";

const Nav = () => {

  const { setSingleAlbum } = useContext(RyanContext);
  
  return (
    <>
      <article className="home-button" data-testid="nav-buttons">
        <Link to="/" className="page-title" onClick={() => setSingleAlbum({})}>Ryan Adams</Link>
      </article>
      <article className="nav-btns">
        <Link to="/playlist" className="page-title" data-testid="nav-buttons" onClick={() => setSingleAlbum({})}>My Playlist</Link>
        <Link to="/about" className="page-title" data-testid="nav-buttons" onClick={() => setSingleAlbum({})}>About</Link>
      </article>
    </>
  )
};

export default Nav

Nav.propTypes = {
  setSingleAlbum: PropTypes.func
};