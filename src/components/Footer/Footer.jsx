import React from 'react';
import './Footer.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <>
      <div className='footer-container'>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                <img src={logo} alt="" />
              </Link>
            </div>
            <small class='website-rights'>VENIT Solutions ©2025</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link twitter'
                to='https://www.linkedin.com/in/aravind-sastry-he-him-54404310'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FontAwesomeIcon icon={ faLinkedin } />
              </Link>
            </div>
            <div></div>
          </div>
        </section>
        <small class='website-rights'>Copyright ©VENIT Consultion | All rights reserved </small>
      </div>
    </>
    
  );
}

export default Footer;

// <Link
//                 class='social-icon-link facebook'
//                 to='/'
//                 target='_blank'
//                 aria-label='Facebook'
//               >
//                 <FontAwesomeIcon icon={ faFacebook } />
//               </Link>
//               <Link
//                 class='social-icon-link instagram'
//                 to='/'
//                 target='_blank'
//                 aria-label='Instagram'
//               >
//                 <FontAwesomeIcon icon={ faInstagram } />
//               </Link>
//               <Link
//                 class='social-icon-link twitter'
//                 to='/'
//                 target='_blank'
//                 aria-label='Twitter'
//               >
//                 <FontAwesomeIcon icon={ faTwitter } />
//               </Link>