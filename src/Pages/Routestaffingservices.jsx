import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarfisrtchild from "../components/Navbarfirstchild/Navbarfirstchild";
import Staffingservices from "../components/Staffingservices/Staffingservices";

const Routestaffingservices = () => {
  return (
    <div>
      <Navbarfisrtchild
        navTitle="Staffing Solutions"
        navFisrtchild="Our Programs"
        navSubtitle="Staffing Solutions"
      />

      <Staffingservices />

      <Footer />
    </div>
  );
};

export default Routestaffingservices;
