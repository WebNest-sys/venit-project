import React from "react";
import "./programs.css";
import employees from "../../assets/employees.png";
import consulting from "../../assets/consulting.png";
import contracttohire from "../../assets/contracttohire.png";
import hiringicon from "../../assets/hiringicon.png";
import consultingicon from "../../assets/consultingicon.png";
import contracticon from "../../assets/contracticon.png";
import CardItem from "../UITemplates/CardItem/CardItem";

const programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={consulting} alt="" />
        <div className="caption">
          <a href="/Itconsultingservices">
            <img src={consultingicon} alt="" />
            <p>IT Consulting Services</p>
          </a>
        </div>
      </div>
      <div className="program">
        <img src={employees} alt="" />
        <div className="caption">
          <a href="/Staffingsolutions">
            <img src={hiringicon} alt="" />
            <p>Staffing Solutions</p>
          </a>
        </div>
      </div>

      <div className="program">
        <img src={contracttohire} alt="" />
        <div className="caption">
          <a href="/Learningdevelopment">
            <img src={contracticon} alt="" />
            <p>Learning &amp; Development</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default programs;
