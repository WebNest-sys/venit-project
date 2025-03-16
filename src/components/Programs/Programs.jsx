import React from "react";
import './programs.css';
import employees from "../../assets/employees.png";
import consulting from "../../assets/consulting.png";
import contracttohire from "../../assets/contracttohire.png";
import hiringicon from "../../assets/hiringicon.png";
import consultingicon from "../../assets/consultingicon.png";
import contracticon from "../../assets/contracticon.png";

const programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={employees} alt="" />
        <div className="caption">
          <img src={hiringicon} alt="" />
          <p>Freshers and Employees Hiring</p>
        </div>
      </div>
      <div className="program">
        <img src={consulting} alt="" />
        <div className="caption">
          <img src={consultingicon} alt="" />
          <p>Consulting / Contractors</p>
        </div>
      </div>
      <div className="program">
        <img src={contracttohire} alt="" />
        <div className="caption">
          <img src={contracticon} alt="" />
          <p>Contract to Hire</p>
        </div>
      </div>
    </div>
  );
};

export default programs;
