import React, { useContext } from "react";
import PropTypes from "prop-types";
import { RyanContext } from "../../Contexts/RyanContext";
import "./About.css";

const About = () => {

  const { ryanData } = useContext(RyanContext);
  
  return (
    <section className="container">
      <article className="about">
        <p className="about-content">{ryanData.about}</p>
      </article>
    </section>
  )
};

export default About

About.propTypes = {
  ryanData: PropTypes.object.isRequired
};

About.defaultProps = {
  ryanData: {}
};