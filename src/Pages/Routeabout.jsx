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
        <p>
          VenIT works directly with IT, Telecom and Semicon Companies for their
          team's success. Additionally, we are happy to support your company
          within whatever process you have established.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Routeabout;
