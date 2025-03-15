import React, { useRef } from "react";
import "./Services.css";
import leftarw from "../../assets/leftarw.png";
import rightarw from "../../assets/rightarw.png";
import telecom from "../../assets/telecom.png";
import blockchain from "../../assets/blockchain.png";
import virtualreality from "../../assets/virtualreality.png";
import cybersecurity from "../../assets/cybersecurity.png";
import robotics from "../../assets/robotics.png";
import infoservices from "../../assets/infoservices.png";

const Services = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -25) {
      tx -= 35;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 35;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="services">
      <img src={leftarw} alt="" className="leftArw" onClick={slideBackward} />
      <img src={rightarw} alt="" className="rightArw" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <img src={telecom} alt="" className="" />
              <div className="serviceInfo">
                <h3>Semicon &amp; Telecom</h3>
                <p>ASIC Developers</p>
                <p>PD Designers</p>
                <p>RTL Designers</p>
                <p>Memory Layout Designers</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={blockchain} alt="" className="" />
              <div className="serviceInfo">
                <h3>Blockchain</h3>
                <p>Block Chain Developer</p>
                <p>Block Chain Research Engineers</p>
                <p>Block Chain Architects</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={virtualreality} alt="" className="" />
              <div className="serviceInfo">
                <h3>Virtual Reality</h3>
                <p>Virtual Reality Developer</p>
                <p>Engineer - XR</p>
                <p>Augmented Engineer</p>
                <p>3D Virtualization</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={cybersecurity} alt="" className="" />
              <div className="serviceInfo">
                <h3>Cyber Security</h3>
                <p>Cyber Security Analyst</p>
                <p>Cyber Security Hackers</p>
                <p>Cyber Security - Cloud</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={robotics} alt="" className="" />
              <div className="serviceInfo">
                <h3>Robotics</h3>
                <p>Robotics Engineer</p>
                <p>Robotics Technical Manager</p>
                <p>Robotics Process Automation</p>
                <p>Robotics Automation Testing</p>
                <p>PLC Programming</p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <img src={infoservices} alt="" className="" />
              <div className="serviceInfo">
                <h3>IT Services</h3>
                <p>Java</p>
                <p>Sharepoint</p>
                <p>.Net</p>
                <p>SAP</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;
