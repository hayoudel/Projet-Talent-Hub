import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import user from '../images/utilisateur.png';
import "../css/navbar.css";
import AuthContext from './AuthContext';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const { isLoggedIn, logout } = useContext(AuthContext);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

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
          <a href="/" className="nav-ink">
            Accueil
          </a>
        </li>
        <li className="nav-item">
          <a href="./contact" className="nav-ink">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Link to="/creervote">
            <button className="nav-button">
              Creer un vote
            </button>
          </Link>
        </li>
        {!isLoggedIn && (
          <div className="au">
            <li className="nav-item">
              <Link to="./connexion">
                <button className="nav-button">
                  Se connecter
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./inscription">
                <button className="nav-button">
                  S'inscrire
                </button>
              </Link>
            </li>
            </div>
        )}
        {isLoggedIn && (
          <div className="au">
            <li className="nav-item-user">
              <Link to="/profile">
                <img src={user} alt="utilisateur" className="user-icon" />
              </Link>
            </li>
              <li className="nav-item">
              <button className="nav-button" onClick={logout}>
                Se déconnecter
              </button>
            </li>
            </div>
        )}
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
