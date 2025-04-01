import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Organizationdevelopment() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="Organization Development"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="Organization Development"
      />
      <div className="pagesContainer">
        <p>
          A planned and systematic approach to enabling sustained organizational
          performance through the involvement of its people. Chartered Institute
          for Personnel and Development
        </p>
        <p>
          VENIT Human Resources specialists, learning and development
          specialists and technical specialists can help you by:
        </p>

        <ul>
          <li>
            Identifying what the organization needs to meet its business
            objectives.
          </li>
          <li>
            Analyzing the gap between the current position and the desired
            future position.
          </li>
          <li>
            Recommending the development, strategic and technical interventions
            that would best fit the identified gap.
          </li>
          <li>
            Implementing and evaluating the interventions, using best practice
            in communication, change management and evaluation metrics.{" "}
          </li>
          <li>
            Implementing Individual Development Plans (IDP) to support business
            growth and employee career goals.
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

export default Organizationdevelopment;
