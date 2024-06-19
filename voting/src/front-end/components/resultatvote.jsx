import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 
import '../css/profile.css';

const Resultatvote= () => {
  return (
    <div className="containerp">
      <div className="section-left">
      <div className="menu-icon">
          <a href="/">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
        <div className="profile-info">
          <a href="/">
            <FontAwesomeIcon icon={faUser} />
          </a> <br /> <h2>Jean Dupont</h2>
        </div>
        <nav>
          <ul>
            <li><a href="/profile">Dossiers personnels</a></li>
            <li><a href="/votecreer">vote Créer</a></li>
            <li><a href="/resultatvote">Resultat des votes</a></li>
          </ul>
        </nav>
      </div>
      <div className="section-right">
        <form className="profile-form1">
          <h2>Resultat des votes</h2>
          
        </form>
      </div>
    </div>
  );
};

export default Resultatvote;
