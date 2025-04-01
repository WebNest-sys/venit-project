import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarthirdchild from "../components/Navbarthirdchild/Navbarthirdchild";

function Technicaltraining() {
  return (
    <div>
      <Navbarthirdchild
        navTitle="Technical Training"
        navFisrtchild="Our Programs"
        navSecondchild="Learning &amp; Development Services"
        navSubtitle="Technical Training"
      />
      <div className="pagesContainer">
        <p>
          At VENIT, we believe in lifelong learning and our technical training
          programs are designed for IT professionals, whether you are starting
          your career or are an experienced professional. Whatever your next
          learning path, be it AI, Data, Analytics, Cybersecurity, Embedded,
          IoT, Blockchain, Telecom, 5G, Cognitive, Internet technical stacks,
          programming languages or any other skills, we've got you covered.
        </p>
        <p>
          Today, software is driving almost everything which has a chip and is
          becoming highly significant and default in most of the IT
          business.Whether the industry is: telecommunication, aerospace,
          defence and military, transportation, mining, agriculture, medical and
          health, finance, education, manufacturing, plants, construction and
          infrastructures, workplace, social life, bars, restaurants, home or
          city, the software is one of core driving principles.
        </p>

        <h3>What can I expect from VENIT technical courses?</h3>
        <ul>
          <li>Outcome based training.</li>
          <li>Immersive and hands on.</li>
          <li>Instructor led, live and interactive sessions.</li>
          <li>Access to world class labs.</li>
          <li>Learn from anywhere. BYOD, PC/Laptop and Smart Phones.</li>
          <li>Industry acclaimed subject matter specialist. </li>
          <li>Success case studies. </li>
          <li>Evaluation and feedback. </li>
          <li>Byte size based duration. </li>
          <li>Access to your performance reports. </li>
          <li>Improved confidence in the technology. </li>
          <li>Well prepared to embark on the next/upcoming/current project.</li>
        </ul>

        <p>
          Wherever possible, we recommend that training take place offsite -
          away from business or work based distractions, telephone and social
          interruptions. However, we also offer live, instructor led,
          interactive, online training.
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

export default Technicaltraining;
