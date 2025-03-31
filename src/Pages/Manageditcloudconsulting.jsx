import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarsecondchild from "../components/Navbarsecondchild/Navbarsecondchild";

function Manageditcloudconsulting() {
  return (
    <div>
      <Navbarsecondchild
        navTitle="Managed IT &amp; Cloud Consulting"
        navFisrtchild="Our Programs"
        navSecondchild="IT Consulting &amp; Services"
        navSubtitle="Managed IT &amp; Cloud Consulting"
      />
      <div className="pagesContainer">
        <h3>Managed IT and Cloud Consulting</h3>
        <p>
          Our experts are Cloud certified professionals. They are engaged in
          real time, providing solutions on architecting, planning,
          implementing, supporting and monitoring for various organisations. We
          are your one stop and preferred Cloud partner.{" "}
        </p>

        <p>
          <strong>Program Governance Management </strong>
        </p>
        <ul>
          <li> Agent based Deployments- People and Services </li>
          <li> End to End Portfolio and Program Management </li>
          <li>ON-Prim Infrastructure Services </li>

          <li>Server and Network Management </li>
          <li>Database Management </li>
          <li>Helpdesk, Proactive Monitoring, and IT Support</li>
          <li>Tool Deployment</li>
          <li>IT Service Management</li>
          <li>Management of Help Desk L1, L2 and L3 </li>
        </ul>

        <p>
          <strong>Multi Cloud Solution Services </strong>
        </p>
        <ul>
          <li>Cloud Transformation</li>
          <li>Consolidation and Migration</li>
          <li>Cloud Cost Optimization</li>
          <li>Data Modernization</li>
          <li>
            Directory Services - AWS, ADS -MS Azure, Google Cloud Identity and
            Office 365
          </li>
        </ul>

        <p>
          <strong>Intune Deployment </strong>
        </p>
        <ul>
          <li>Mobile Device Management (MDM) </li>
          <li>Remote Monitoring and Management (RMM)</li>
        </ul>

        <p>
          <strong>Cloud Security and Compliance Services </strong>
        </p>

        <ul>
          <li>Cloud Security Posture (CSP) </li>
          <li>Patch And Vulnerabilities Assessment</li>
          <li>Risk Management</li>
          <li>
            ISMS , SOC2, Policy creation and Reviews, Internal and external
            Audit
          </li>
          <li>Compliance Certifications </li>
        </ul>

        <p>
          <strong>Business Availability Services </strong>
        </p>
        <ul>
          <li>Business Continuity Planning</li>
          <li>Best Practices alignment </li>
          <li>
            Disaster Recovery Availability, Monitoring, Analysis and Reporting{" "}
          </li>
          <li>Backup and Recovery </li>

          <li>Backup, Archive, Retention and Recovery Management</li>

          <li>SLA Management </li>
        </ul>
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

export default Manageditcloudconsulting;
