import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarsecondchild from "../components/Navbarsecondchild/Navbarsecondchild";

function Processconsulting() {
  return (
    <div>
      <Navbarsecondchild
        navTitle="Process and Compliance consulting"
        navFisrtchild="Our Programs"
        navSecondchild="IT Consulting &amp; Services"
        navSubtitle="Process and Compliance consulting"
      />
      <div className="pagesContainer">
        <h3>Process Consulting</h3>
        <p>
          VENIT offers consulting and training on CMMI L5 / Various ISO
          standards (ISO 9001, ISO 13485, ISO 14001, ISO 18001, ISO 20000, ISO
          22301, ISO 27001, ISO 27017, ISO 27018, ISO 29100 & ISO 31000),
          Privacy related topics (EU GDPR), Project / Risk / Quality Management.
        </p>
        <p>
          Our experts are certified auditors and have implemented the process in
          various organisations
        </p>

        <h3>List of consulting and training Services</h3>

        <ul>
          <li> GDPR (General Data Protection Regulation)</li>
          <li>Certified ISO 9001:2015 (QMS) </li>
          <li>Certified ISO 27001:2013 (ISMS) </li>
          <li>Certified ISO 22301:2014 (BCMS) </li>
          <li>Certified ITIL V3.0 /4.X </li>
          <li>ISTQB (International Software Testing Qualification Board) </li>
          <li>Certified Software Quality Analyst (CSQA)</li>
          <li>Certified Software Test Engineer (CSTE) </li>
        </ul>

        <h3>
          Consulted and helped implemented the following projects consulting
        </h3>
        <ul>
          <li> ISO / IEC 27001:2013, Dubai </li>
          <li> ISMS / SMS Internal Audits, Dubai </li>
          <li> ISMS / BCMS / SMS Internal Audits, Kingdom of Saudi Arabia)</li>
          <li> ISO / IEC 27001:2013, Muscat, Sultanate of OMAN </li>
          <li> ISO / IEC 27001:2013, Colombo, Srilanka </li>
          <li> ISO / IEC 27001:2013, Bengaluru, India </li>
          <li> Risk Assessments across many MNV organizations </li>
          <li>
            Conducted GDPR (General Data Protection Regulations) workshops /
            assessments to many MNC clients in India
          </li>
          <li>
            Conducted PDPA 2018 (Personal Data Protection Act (Bill), 2018)
            workshops / assessments to major clients in India
          </li>
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

export default Processconsulting;
