import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Leadershipdevelopment() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="Leadership Development"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="Leadership Development"
      />
      <div className="pagesContainer">
        <p>
          Skilful leaders can understand the motivators of their people and are
          able to leverage them to achieve a shared goal. Leadership development
          enables employees to improve their skills in areas such as: decision
          making, project management, strategic thinking, network building,
          inclusive team management, innovation, coaching and developing others.
        </p>

        <h3>VENIT learning and development specialists</h3>

        <ul>
          <li>
            Analyzing development needs of leadership teams and individuals.
          </li>
          <li> Designing and delivering leadership development programs.</li>
          <li>
            Using psychometric tools as a means of developing self-awareness and
            as a focus for development.
          </li>
          <li>
            Providing a series of focussed coaching interventions by
            experienced, accredited coaches and behavioural psychologists.
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

export default Leadershipdevelopment;
