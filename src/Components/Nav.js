import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Nav = () => {

  const [active, setActive] = useState(false)
  
  const toggle = () => {
    setActive(!active)
  }
  return (
    <>
      <button onClick={toggle}>Open</button>
      <div className="menu">{active && <BurgerMenu />}</div>
      <h1 className="page-title">Ryan Adams</h1>
    </>
  )
}

export default Nav