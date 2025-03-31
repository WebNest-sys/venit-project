import React from "react";
import "./Itconsultingservices.css";
import consulting from "../../assets/consulting.png";

const Itconsultingservices = () => {
  return (
    <div>
      <div className="consultServices">
        <img src={consulting} alt="" />
        <ul className="serviceList">
          <li>
            <h3>Artificial Intelligence</h3>
            <p>
              AI has an increased focus on infusing data and AI across its
              offerings that enables clients to generate higher value from their
              digital transformation initiatives.
            </p>
            <div className="serlistMore">
              <a href="/Artificialintelligence">Read More</a>
            </div>
          </li>
          <li>
            <h3>Data &amp; Analytics</h3>
            <p>
              Data & Analytics are effectively enhancing operations and digital
              reach for businesses by helping them personalize customer
              experience, hone their product strategy, and optimize their
              decision-making capabilities.
            </p>
            <div className="serlistMore">
              <a href="/Dataanalytics">Read More</a>
            </div>
          </li>
          <li>
            <h3>Embedded &amp; IoT Solutions</h3>
            <p>
              VENIT offers a wide range of Embedded and IoT Solutions and
              Services that are intended towards transforming an idea into a
              complete product.
            </p>
            <div className="serlistMore">
              <a href="/Embedediot">Read More</a>
            </div>
          </li>
          <li>
            <h3>Cybersecurity</h3>
            <p>
              We at VENIT are a passionate team, highly trained, proactive
              ethical hackers. We protect and secure organizations from costly
              cybersecurity breaches by collaborating with them to enhance and
              strengthen their security posture.
            </p>
            <div className="serlistMore">
              <a href="/Cybersecurity">Read More</a>
            </div>
          </li>
          <li>
            <h3>Blockchain</h3>
            <p>
              VENIT helps clients explore every aspect of blockchain and build
              tailored solutions designed to deliver value. Through
              architecture, digital design, and development.
            </p>
            <div className="serlistMore">
              <a href="/Blockchain">Read More</a>
            </div>
          </li>
          <li>
            <h3>Managed IT &amp; Cloud Consulting</h3>
            <p>
              Our experts are Cloud certified professionals. They are engaged in
              real time, providing solutions on architecting, planning,
              implementing, supporting and monitoring for various organisations.
            </p>
            <div className="serlistMore">
              <a href="/Manageditcloudconsulting">Read More</a>
            </div>
          </li>
          <li>
            <h3>Full Stack Solutions</h3>
            <p>
              In the recent years of development, we have seen a lot of shift
              from OS Level stacks to an OS-agnostics solutions. Of course, it
              is not a replacement of the OS based stack but in some cases
              offers an alternate development cycle.
            </p>
            <div className="serlistMore">
              <a href="/Fullstack">Read More</a>
            </div>
          </li>
          <li>
            <h3>UI/UX Services</h3>
            <p>
              The best user experience (UX) design comes from empathizing with
              the people using your digital experience. Our UX practice
              leverages qualitative and quantitative data like audience
              research, user interviews and User testing etc
            </p>
            <div className="serlistMore">
              <a href="/">Read More</a>
            </div>
          </li>
          <li>
            <h3>E-Commerce Servives</h3>
            <p>
              There are top eCommerce platforms and our solutions that allow one
              to learn from other businesses that can significantly improve your
              innovations pipeline, leading to sustainable advantage over your
              competitors.
            </p>
            <div className="serlistMore">
              <a href="/">Read More</a>
            </div>
          </li>
          <li>
            <h3>Mobile Application Services</h3>
            <p>
              We offer a full cycle of application design, integration and
              management services. Whether it is a consumer oriented app or a
              transformative enterprise-class solution.
            </p>
            <div className="serlistMore">
              <a href="/">Read More</a>
            </div>
          </li>
          <li>
            <h3>Process Consulting</h3>
            <p>
              VENIT offers consulting and training on CMMI L5 / Various ISO
              standards (ISO 9001, ISO 13485, ISO 14001, ISO 18001, ISO 20000,
              ISO 22301, ISO 27001, ISO 27017, ISO 27018, ISO 29100 & ISO
              31000).
            </p>
            <div className="serlistMore">
              <a href="/">Read More</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Itconsultingservices;
