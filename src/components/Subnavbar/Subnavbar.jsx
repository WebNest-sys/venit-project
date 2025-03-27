import React from "react";
import "./Subnavbar.css";

const Subnavbar = ({ navTitle, navSubtitle }) => {
  return (
    <div className="navContainer">
      <h1>{navTitle}</h1>
      <div className="breadCrumbs">
        <a href="/" title="back to Venit Solutions home page">
          Home
        </a>
        <span>/</span> {navSubtitle}
      </div>
    </div>
  );
};

export default Subnavbar;
