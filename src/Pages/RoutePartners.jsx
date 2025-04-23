import React from "react";
import Footer from "../components/Footer/Footer";
import Ourpartners from "../components/Partnerspage/Ourpartners";

// import Subnavbar from "../components/Subnavbar/Subnavbar";
{/* <Subnavbar navTitle="Our Partners" navSubtitle="Our Partners" /> */}

function RoutePartners() {
  return (
    <div>
      <div className="pagesContainer">
        <Ourpartners />
      </div>
      <Footer />
    </div>
  );
}

export default RoutePartners;
