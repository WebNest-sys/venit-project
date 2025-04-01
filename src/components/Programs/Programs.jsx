import React from "react";
import { Link } from "react-router-dom";
import "./programs.css";
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
        <img src={consulting} alt="" />
        <div className="caption">
          <Link to="/Itconsultingservices">
            <img src={consultingicon} alt="" />
            <p>IT Consulting Services</p>
          </Link>
        </div>
      </div>
      <div className="program">
        <img src={employees} alt="" />
        <div className="caption">
          <Link to="/Staffingservices">
            <img src={hiringicon} alt="" />
            <p>Staffing Solutions</p>
          </Link>
        </div>
      </div>

      <div className="program">
        <img src={contracttohire} alt="" />
        <div className="caption">
          <Link to="/Learningdevelopment">
            <img src={contracticon} alt="" />
            <p>Learning &amp; Development</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default programs;
