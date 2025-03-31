import React from "react";
import "./Navbarfirstchild.css";

const Subnavbar = ({ navTitle, navFisrtchild, navSubtitle }) => {
  return (
    <div className="navContainer">
      <h1>{navTitle}</h1>
      <div className="breadCrumbs">
        <a href="/" title="Back to Venit Solutions home page">
          Home
        </a>
        <span>/</span>
        <a href="/program">{navFisrtchild}</a>
        <span>/</span> {navSubtitle}
      </div>
    </div>
  );
};

export default Subnavbar;
