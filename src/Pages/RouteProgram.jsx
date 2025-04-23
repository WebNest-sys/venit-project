import React from "react";
import Title from "../components/UITemplates/Title/Title";
import Footer from "../components/Footer/Footer";
import Programs from "../components/Programs/Programs";
import Services from "../components/Services/Services";

// import Subnavbar from "../components/Subnavbar/Subnavbar";
// <Subnavbar navTitle="Our Programs" navSubtitle="Our Programs" />

function RouteProgram() {
  return (
    <div>
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
        <Title
          subTitle="Staffing Services"
          title="Our Capabilites and domain expertise"
        />
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default RouteProgram;
