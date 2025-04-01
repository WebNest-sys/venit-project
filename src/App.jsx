import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RouteHome from "./Pages/RouteHome";
import RouteContact from "./Pages/RouteContact";
import Routeabout from "./Pages/Routeabout";
import RouteProgram from "./Pages/RouteProgram";
import RoutePartners from "./Pages/RoutePartners";
import RouteItconsultingservices from "./Pages/RouteItconsultingservices";
import Routelearningdevelopment from "./Pages/Routelearningdevelopment";
import Routestaffingservices from "./Pages/Routestaffingservices";
import Artificialintelligence from "./Pages/Artificialintelligence";
import Dataanalytics from "./Pages/Dataanalytics";
import Embedediot from "./Pages/Embedediot";
import Cybersecurity from "./Pages/Cybersecurity";
import Blockchain from "./Pages/Blockchain";
import Manageditcloudconsulting from "./Pages/Manageditcloudconsulting";
import Fullstack from "./Pages/Fullstack";
import Uiuxservices from "./Pages/Uiuxservices";
import Ecommerce from "./Pages/Ecommerce";
import Mobileapplication from "./Pages/Mobileapplication";
import Processconsulting from "./Pages/Processconsulting";
import Organizationdevelopment from "./Pages/Organizationdevelopment";
import Leadershipdevelopment from "./Pages/Leadershipdevelopment";
import Technicaltraining from "./Pages/Technicaltraining";
import Talentdevelopment from "./Pages/Talentdevelopment";
import Highperformingteams from "./Pages/Highperformingteams";
import Relationshipintelligence from "./Pages/Relationshipintelligence";
import Learningdevelopmentservice from "./Pages/Learningdevelopmentservice";
import Learningmanagementsystems from "./Pages/Learningmanagementsystems";
import Assessments from "./Pages/Assessments";

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
            path="/Itconsultingservices"
            element={<RouteItconsultingservices />}
          />
          <Route
            path="/Learningdevelopment"
            element={<Routelearningdevelopment />}
          />
          <Route path="/Staffingservices" element={<Routestaffingservices />} />
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
          <Route path="/Uiuxservices" element={<Uiuxservices />} />
          <Route path="/Ecommerce" element={<Ecommerce />} />
          <Route path="/Mobileapplication" element={<Mobileapplication />} />
          <Route path="/Processconsulting" element={<Processconsulting />} />
          <Route
            path="/Organizationdevelopment"
            element={<Organizationdevelopment />}
          />
          <Route
            path="/Leadershipdevelopment"
            element={<Leadershipdevelopment />}
          />
          <Route path="/Technicaltraining" element={<Technicaltraining />} />
          <Route path="/Talentdevelopment" element={<Talentdevelopment />} />
          <Route
            path="/Highperformingteams"
            element={<Highperformingteams />}
          />
          <Route
            path="/Relationshipintelligence"
            element={<Relationshipintelligence />}
          />
          <Route
            path="/Learningdevelopmentservice"
            element={<Learningdevelopmentservice />}
          />
          <Route
            path="/Learningmanagementsystems"
            element={<Learningmanagementsystems />}
          />
          <Route path="/Assessments" element={<Assessments />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
