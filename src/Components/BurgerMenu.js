import React from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/playlist">My PLaylist</Link>
      <Link to="/about">About</Link>
    </>
  )
}

export default BurgerMenu