import React from "react";
import  { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import RouteHome from './Pages/RouteHome';
import RouteContact from "./Pages/RouteContact";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<RouteHome/>} />
        <Route path='/contact' element={<RouteContact/>} />
      </Routes>
      </Router>
    </>
  );
};

export default App;
