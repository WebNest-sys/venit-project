import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarsecondchild from "../components/Navbarsecondchild/Navbarsecondchild";

function Mobileapplication() {
  return (
    <div>
      <Navbarsecondchild
        navTitle="Mobile Application Services"
        navFisrtchild="Our Programs"
        navSecondchild="IT Consulting &amp; Services"
        navSubtitle="Mobile Application Services"
      />
      <div className="pagesContainer">
        <p>
          We offer a full cycle of application design, integration and
          management services. Whether it is a consumer oriented app or a
          transformative enterprise-class solution, the company leads the entire
          mobile app development process from ideation and concept to delivery,
          and to ongoing support.
        </p>

        <ul>
          <li> Custom iOS and Android apps development</li>
          <li>Native and cross-platform solutions</li>
          <li>Second platform app development</li>
          <li>Consulting and prototyping</li>
          <li>Automated QA and testing</li>
          <li>Power management, notification and geofencing</li>
          <li>Embedded Android & AOSP customizations</li>
          <li>Maintenance and post-warranty support</li>
          <li>Flutter Application Development</li>
          <li>React Native Application Development</li>
          <li>Wearable Application Development</li>
          <li>Progressive Web Application Development</li>
        </ul>

        <h3> Enterprise Mobility Solutions</h3>
        <p>
          Our expert & highly experienced enterprise mobility team build
          enterprise-grade applications for native, cross-platform mobile and
          wearable devices.
        </p>

        <h3> Cross-Platform Mobile Application </h3>
        <p>
          Our cross-platform mobile applications run precisely for every
          platform with reduced cost, faster speed and reusable code components.
        </p>

        <h3> Mobile App Prototype</h3>
        <p>
          For a robust mobile app, mobile prototyping lays the foundation for
          your app development process, and we possess the necessary knowledge
          in it.
        </p>

        <p>
          We would love to hear from you. Write us at
          <a href="mailto:aravind@venitconsulting.com">
            {" "}
            aravind@venitconsulting.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default Mobileapplication;
