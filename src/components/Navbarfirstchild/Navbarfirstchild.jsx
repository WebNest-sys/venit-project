import React from "react";
import { Link } from "react-router-dom";
import "./Navbarfirstchild.css";

const Navbarfirstchild = ({ navTitle, navFisrtchild, navSubtitle }) => {
  return (
    <div className="navContainer">
      <h1>{navTitle}</h1>
      <div className="breadCrumbs">
        <Link to="/" title="Back to Venit Solutions home page">
          Home
        </Link>
        <span>/</span>
        <Link to="/program">{navFisrtchild}</Link>
        <span>/</span> {navSubtitle}
      </div>
    </div>
  );
};

export default Navbarfirstchild;
