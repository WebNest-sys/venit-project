import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Relationshipintelligence() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="Relationship Intelligence"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="Relationship Intelligence"
      />
      <div className="pagesContainer">
        <p>
          Relationship Intelligence (RQ) provides visibility into the motives,
          conflict, and strengths of a team. Managers who apply this insight
          will get the best of everyone's strengths and build a culture of
          resilient relationships that are responsive to challenges and
          opportunities. - Core Strengths
        </p>
        <h3>
          VENIT partners with Core Strengths to distribute the Strength
          Deployment Inventory (SDI) assessment and provide:
        </h3>

        <ul>
          <li>
            An in-depth analysis of individual and team preferences, the
            strengths they bring to work, their motives when working with others
            and what can trigger conflict.
          </li>
          <li>
            A tool for managers and leaders to understand how best to
            communicate with their people and provide opportunities to play to
            their strengths.
          </li>
          <li>
            A template for informative team days where participants learn about
            themselves and others through fun exercises and games.
          </li>
          <li>
            A way of understanding team dynamics and conflicts when a team is
            underperforming.
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

export default Relationshipintelligence;
