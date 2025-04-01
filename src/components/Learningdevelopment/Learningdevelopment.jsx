import React from "react";
import "./Learningdevelopment.css";
import contracttohire from "../../assets/contracttohire.png";

const Learningdevelopment = () => {
  return (
    <div>
      <div className="consultServices">
        <img src={contracttohire} alt="" />
        <ul className="serviceList">
          <li>
            <h3>Organization Development</h3>
            <p>
              A planned and systematic approach to enabling sustained
              organizational performance through the involvement of its people.
              Chartered Institute for Personnel and Development
            </p>
            <div className="serlistMore">
              <a href="/Organizationdevelopment">Read More</a>
            </div>
          </li>
          <li>
            <h3>Leadership Development</h3>
            <p>
              Skilful leaders can understand the motivators of their people and
              are able to leverage them to achieve a shared goal. Leadership
              development enables employees to improve their skills
            </p>
            <div className="serlistMore">
              <a href="/Leadershipdevelopment">Read More</a>
            </div>
          </li>
          <li>
            <h3>Technical Training</h3>
            <p>
              At VENIT, we believe in lifelong learning and our technical
              training programs are designed for IT professionals, whether you
              are starting your career or are an experienced professional.
            </p>
            <div className="serlistMore">
              <a href="/Technicaltraining">Read More</a>
            </div>
          </li>
          <li>
            <h3>Talent Development</h3>
            <p>
              Develop your talented people by creating opportunities for them to
              play to their strengths and to grow. Set them up for success in a
              company that supports their career advancement and capitalises on
              their strengths.
            </p>
            <div className="serlistMore">
              <a href="/Talentdevelopment">Read More</a>
            </div>
          </li>
          <li>
            <h3>High Performing Teams</h3>
            <p>
              High performing teams are critical to the success of an
              organisation and it's critical that the high performance is
              sustainable.
            </p>
            <div className="serlistMore">
              <a href="/Highperformingteams">Read More</a>
            </div>
          </li>
          <li>
            <h3>Relationship Intelligence</h3>
            <p>
              Relationship Intelligence (RQ) provides visibility into the
              motives, conflict, and strengths of a team. Managers who apply
              this insight will get the best of everyone's strengths and build a
              culture of resilient relationships
            </p>
            <div className="serlistMore">
              <a href="/Relationshipintelligence">Read More</a>
            </div>
          </li>
          <li>
            <h3>L &amp; D as a Service</h3>
            <p>
              Additional resources can help you plan and deliver your
              development initiatives. Our existing customers find this model to
              be effective.
            </p>
            <div className="serlistMore">
              <a href="/Learningdevelopservice">Read More</a>
            </div>
          </li>
          <li>
            <h3>Learning Management Systems</h3>
            <p>
              An LMS provides your organization with the knowledge you need to
              enhance your learning and development programs. LMS provides a
              centralized platform for organizing and managing learning
              materials, courses, and resources.
            </p>
            <div className="serlistMore">
              <a href="/Learningmanagementsystems">Read More</a>
            </div>
          </li>
          <li>
            <h3>Assessments</h3>
            <p>
              VENIT partners with a number of organizations and practitioners to
              provide our customers with a scientifically validated and
              objective means of assessing personality traits, technical and
              non-technical skills.
            </p>
            <div className="serlistMore">
              <a href="/Assessments">Read More</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Learningdevelopment;
