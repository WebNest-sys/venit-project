import React from "react";
import "./Navbarsecondchild.css";

const Subnavbar = ({
  navTitle,
  navFisrtchild,
  navSecondchild,
  navSubtitle,
}) => {
  return (
    <div className="navContainer">
      <h1>{navTitle}</h1>
      <div className="breadCrumbs">
        <a href="/" title="Back to Venit Solutions home page">
          Home
        </a>
        <span>/</span>
        <a href="/program">{navFisrtchild}</a>
        <span>/</span>
        <a href="/Itconsultingservices">{navSecondchild}</a>
        <span>/</span> {navSubtitle}
      </div>
    </div>
  );
};

export default Subnavbar;
