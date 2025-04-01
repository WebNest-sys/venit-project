import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Talentdevelopment() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="Talent Development"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="Talent Development"
      />
      <div className="pagesContainer">
        <p>
          Develop your talented people by creating opportunities for them to
          play to their strengths and to grow. Set them up for success in a
          company that supports their career advancement and capitalises on
          their strengths.
        </p>
        <h3>
          VENIT learning and development specialists and coaches can help you
          by:
        </h3>
        <ul>
          <li>
            Co-developing a process to align individual career advancement with
            business goals and the use of individual development plans.
          </li>
          <li>
            Using psychometric tools to understand individual strengths and
            personality traits, ensuring they’re in the best positions.
          </li>
          <li>
            Delivering career workshops to support employees to own their career
            development.
          </li>
          <li>
            Delivering career workshops to help managers hold effective career
            conversations with their people.
          </li>
          <li>
            Designing and facilitating development programmes as well as
            individual workshops.
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

export default Talentdevelopment;
