import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarfisrtchild from "../components/Navbarfirstchild/Navbarfirstchild";
import Itconsultingservices from "../components/Itconsultingserices/Itconsultingservices";

function RouteItconsultingservices() {
  return (
    <div>
      <Navbarfisrtchild
        navTitle="IT Consulting Services"
        navFisrtchild="Our Programs"
        navSubtitle="IT Consulting Services"
      />

      <Itconsultingservices />

      <Footer />
    </div>
  );
}

export default RouteItconsultingservices;
