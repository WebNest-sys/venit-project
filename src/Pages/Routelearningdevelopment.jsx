import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarfisrtchild from "../components/Navbarfirstchild/Navbarfirstchild";
import Learningdevelopment from "../components/Learningdevelopment/Learningdevelopment";

function Routelearningdevelopment() {
  return (
    <div>
      <Navbarfisrtchild
        navTitle="Learning &amp; Development Services"
        navFisrtchild="Our Programs"
        navSubtitle="Learning &amp; Development Services"
      />

      <Learningdevelopment />

      <Footer />
    </div>
  );
}

export default Routelearningdevelopment;
