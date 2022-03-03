import React, { useContext } from "react";
import { RyanContext } from "../../Contexts/RyanContext";
import "./About.css"

const About = () => {

  const { ryanData } = useContext(RyanContext)
  
  return (
    <section className="container">
      <article className="about">
        <p className="about-content">{ryanData.about}</p>
      </article>
    </section>
  )
}

export default About