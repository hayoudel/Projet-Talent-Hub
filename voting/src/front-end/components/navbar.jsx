import React, { useState } from "react";

import "../css/navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav-header">
        VOTING
      </a>
      <ul className={active}>
        <li className="nav-item">
          <a href="#" className="nav-ink">
            Accueil
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-ink">
            Contact
          </a>
        </li>
        <li className="nav-item">
         
            <button className="nav-button">
              Creer un vote
            </button>
            </li>
         
        <li className="nav-item">
         
            <button className="nav-button">
              Se connecter
            </button>
          
        </li>
        <li className="nav-item">
         
            <button className="nav-button">
              S'inscrire
            </button>
         
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
