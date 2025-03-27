import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import RouteHome from "./Pages/RouteHome";
import RouteContact from "./Pages/RouteContact";
import Routeabout from "./Pages/Routeabout";
import RouteProgram from "./Pages/RouteProgram";
import RoutePartners from "./Pages/RoutePartners";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
