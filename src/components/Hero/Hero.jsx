import React from "react";
import "./Hero.css";

const hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Your Partner in Technology, Talent, and Training</h1>
        <p>
          Empowering businesses with innovative IT solutions, strategic staffing
          services, and tailored learning programs. We help you build
          high-performing teams, adopt cutting-edge technologies, and drive
          sustainable growth. Partner with us to stay ahead in a rapidly
          evolving digital landscape.
        </p>
        <button className="btn">Explore more</button>
      </div>
    </div>
  );
};

export default hero;
