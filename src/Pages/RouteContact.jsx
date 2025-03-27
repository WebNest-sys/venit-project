import React from "react";
import Footer from "../components/Footer/Footer";
import ContactSection from "../components/ContactSection/ContactSection";
import Subnavbar from "../components/Subnavbar/Subnavbar";

function RouteContact() {
  return (
    <div>
      <Subnavbar navTitle="Contact Us" navSubtitle="Contact Us" />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default RouteContact;
