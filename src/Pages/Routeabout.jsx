import React from "react";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Subnavbar from "../components/Subnavbar/Subnavbar";

function Routeabout() {
  return (
    <div>
      <Subnavbar navTitle="About Us" navSubtitle="About Us" />
      <div className="container">
        <About />
      </div>
      <div className="pagesContainer">
        <ul>
          <li>
            We have great network with top IT , Telecom, Networking and Semicon
            companies for Campus hiring pan India.
          </li>
          <li>We train Fresher on real time projects.</li>
          <li>We conduct client round interviews.</li>
          <li>
            We have our own Staffing (placement) services and we work directly
            with our end clients.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Routeabout;
