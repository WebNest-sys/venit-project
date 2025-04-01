import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Highperformingteams() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="High Performing Teams"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="High Performing Teams"
      />
      <div className="pagesContainer">
        <p>
          <strong>
            {" "}
            When people work well together towards a common goal, they often go
            above and beyond their individual responsibilities to achieve great
            things. A poorly functioning team may result in conflict and
            disfunction{" "}
          </strong>
          - Chartered Institute for Personnel and development.
        </p>

        <p>
          High performing teams are critical to the success of an organisation
          and it's critical that the high performance is sustainable.
        </p>
        <h3>
          VENIT learning and development specialists and coaches can help you
          by:
        </h3>

        <ul>
          <li>
            Analyzing team performance and behaviour using psychometric tools.
          </li>
          <li>
            Profiling members of the team to ascertain what’s important to them,
            where and when they perform at their best and individual causes of
            conflict.
          </li>
          <li>
            Identifying the strengths of a team and how they need to perform to
            meet business objectives.
          </li>
          <li>Designing and facilitating team away days.</li>
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

export default Highperformingteams;
