import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Learningdevelopmentservice() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="Learning and Development as a Service"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="Learning and Development as a Service"
      />
      <div className="pagesContainer">
        <p>
          Additional resources can help you plan and deliver your development
          initiatives. Our existing customers find this model to be effective.
          With a team of experienced development specialists, VENIT can provide
          added resources to your team in a way that suits your needs:
        </p>

        <ul>
          <li>Human Resources business partners.</li>
          <li>Organisation development practitioners.</li>
          <li>Communication specialists.</li>
          <li>Change managers.</li>
          <li>Executive and performance coaches.</li>
          <li>Business psychologists.</li>
          <li>
            Psychometric practitioners including Relationship Intelligence
            specialists.
          </li>
          <li>Program designers and facilitators.</li>
        </ul>
        <p>
          Whether you're looking for someone to support your team for a single
          initiative or maybe a fixed-term addition, we have a solution to fit.
          <strong> Talk to us about daily rates or prices per project. </strong>
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

export default Learningdevelopmentservice;
