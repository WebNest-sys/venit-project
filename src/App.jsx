import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RouteHome from "./Pages/RouteHome";
import RouteContact from "./Pages/RouteContact";
import Routeabout from "./Pages/Routeabout";
import RouteProgram from "./Pages/RouteProgram";
import RoutePartners from "./Pages/RoutePartners";
import RouteItconsultingservices from "./Pages/RouteItconsultingservices";
import Artificialintelligence from "./Pages/Artificialintelligence";
import Dataanalytics from "./Pages/Dataanalytics";
import Embedediot from "./Pages/Embedediot";
import Cybersecurity from "./Pages/Cybersecurity";
import Blockchain from "./Pages/Blockchain";
import Manageditcloudconsulting from "./Pages/Manageditcloudconsulting";
import Fullstack from "./Pages/Fullstack";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RouteHome />} />
          <Route path="/contact" element={<RouteContact />} />
          <Route path="/about" element={<Routeabout />} />
          <Route path="/program" element={<RouteProgram />} />
          <Route path="/partners" element={<RoutePartners />} />
          <Route
            path="/itconsultingservices"
            element={<RouteItconsultingservices />}
          />
          <Route
            path="/Artificialintelligence"
            element={<Artificialintelligence />}
          />
          <Route path="/Dataanalytics" element={<Dataanalytics />} />
          <Route path="/Embedediot" element={<Embedediot />} />
          <Route path="/Cybersecurity" element={<Cybersecurity />} />
          <Route path="/Blockchain" element={<Blockchain />} />
          <Route
            path="/Manageditcloudconsulting"
            element={<Manageditcloudconsulting />}
          />
          <Route path="/Fullstack" element={<Fullstack />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
