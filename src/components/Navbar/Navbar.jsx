// import React, { useEffect, useState } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       window.scrollY > 50 ? setSticky(true) : setSticky(false);
//     });
//   }, []);

//   return (
//     <nav className={`container ${sticky ? "darkNav" : ""}`}>
//       <img src={logo} alt="" className="logo" />
//       <ul>
//         <li>Home</li>
//         <li>Program</li>
//         <li>About Us</li>
//         <li>Campus</li>
//         <li>Testimonials</li>
//         <li className="btn">Contact US</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <li className="navbar-logo">
            <Link to="/">
              <img src={logo} className="logo-width" />
            </Link>
          </li>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/program"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/partners"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Partners
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
