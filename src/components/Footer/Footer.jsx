import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() { 
  return (
    <footer className="footer">
      <img  src={logo} alt="Logo" className="footer-logo" />

      <p className="footer-text">
        © Copyright VENIT Consultion | All rights reserved
      </p>

      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/aravind-sastry-he-him-54404310"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <FontAwesomeIcon icon={ faLinkedin } /> <span className="linkedin-text">Follow us on LinkedIn</span>
        </a>

        <Link to="/contact" className="contact-link"> /  Contact Us</Link>
      </div>
    </footer>
  );
}

export default Footer;
