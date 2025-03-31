import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarsecondchild from "../components/Navbarsecondchild/Navbarsecondchild";

function Fullstack() {
  return (
    <div>
      <Navbarsecondchild
        navTitle="Full Stack Solutions and Services"
        navFisrtchild="Our Programs"
        navSecondchild="IT Consulting &amp; Services"
        navSubtitle="Full Stack Solutions and Services"
      />
      <div className="pagesContainer">
        <p>
          In the recent years of development, we have seen a lot of shift from
          OS Level stacks to an OS-agnostics solutions. Of course, it is not a
          replacement of the OS based stack but in some cases offers an
          alternate development cycle. Full Stack Development stack term is
          ubiquitous in software solutions today and it is the expertise in
          front end and back end technologies of web development.
        </p>
        <p>
          Our Full Stack Developers are well trained, proven industry experts
          who are proficient in both client-side, front-end and server-side,
          back-end development, ensuring end-to-end functionality and seamless
          user experiences. This versatility allows our customers to build to
          the entire software development that is completely OS-agnostic.
        </p>
        <p>
          Our ability to work in all the layers of the application leads to
          platform builds that involve databases, user-facing websites, and
          working with clients during the planning phase of projects. We
          architect and implement software solutions, handle databases, design
          user interfaces, and ensure the seamless integration of various
          components. We offer the following stacked solutions:
        </p>

        <h3>GRAND stack </h3>
        <ul>
          <li>GraphQL - data query and manipulation language </li>
          <li>React - web application presentation </li>
          <li>Apollo - Data Graph Platform </li>
          <li>Neo4j -database management systems </li>
        </ul>
        <h3>MEAN </h3>
        <ul>
          <li>MongoDB (database) </li>
          <li>Express.js (application controller layer) </li>
          <li>AngularJS/Angular (web application presentation) </li>
          <li>Node.js (JavaScript runtime) </li>
        </ul>
        <h3>MERN </h3>
        <ul>
          <li>MongoDB (database) </li>
          <li>Express.js (application controller layer) </li>
          <li>React.js (web application presentation) </li>
          <li>Node.js (JavaScript runtime)</li>
        </ul>
        <h3>MEVN </h3>
        <ul>
          <li>MongoDB (database) </li>
          <li>Express.js (application controller layer) </li>
          <li>Vue.js (web application presentation) </li>
          <li>Node.js (JavaScript runtime) </li>
        </ul>
        <h3>PERN </h3>
        <ul>
          <li>PostgreSQL (database) </li>
          <li>Express.js (application controller layer) </li>
          <li>React (JavaScript library) (web application presentation) </li>
          <li>Node.js (JavaScript runtime) </li>
        </ul>
        <h3>NMP </h3>
        <ul>
          <li>Nginx -web server </li>
          <li>MySQL or MariaDB -database </li>
          <li>PHP -programming language </li>
        </ul>
        <h3>XAMPP </h3>
        <ul>
          <li>cross-platform (operating system) </li>
          <li>Apache (web server) </li>
          <li>MariaDB or MySQL (database) </li>
          <li>PHP (programming language) </li>
          <li>Perl (programming language) </li>
        </ul>
        <h3>LAMP </h3>
        <ul>
          <li>Linux (operating system) </li>
          <li>Apache (web server) </li>
          <li>MySQL or MariaDB (database management systems) </li>
          <li>Perl, PHP, or Python (scripting languages) </li>
        </ul>
        <h3>LEMP/LNMP </h3>
        <ul>
          <li>Linux (operating system) </li>
          <li>Nginx (web server) </li>
          <li>MySQL or MariaDB (database management systems) </li>
          <li>Perl, PHP, or Python (scripting languages) </li>
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

export default Fullstack;
