import React from "react";
import "./About.css";
import about from "../../assets/about.png";
// import play from "../../assets/play.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <img src={about} alt="" className="aboutImg" />
        {/* <img src={play} alt="" className="playImg" /> */}
      </div>
      <div className="aboutRight">
        <h3>ABOUT VENIT Consulting</h3>
        <h2>We Are Where You Are</h2>
        <p>
          The universe is constant except change we had of the changes and that
          is how the world keeps developing the same thing applies to
          technologies, as well latest trends. In every technology help in
          making the world a better place to live, so over here we have discuss
          some of those top trending technologies. We work with real time
          technology partners based out of India, Malaysia, Singapore, UAE, USA
          and Canada.
        </p>
      </div>
    </div>
  );
};

export default About;
