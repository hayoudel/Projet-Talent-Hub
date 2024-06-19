import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 
import '../css/profile.css';

const Profile = () => {
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
          </a>
          <br />
          <h2>Jean Dupont</h2>
        </div>
        <nav>
          <ul>
            <li><a href="/profile">Informations personnelles</a></li>
            <li><a href="/votecreer">Créer un vote</a></li>
            <li><a href="/resultatvote">Résultat des votes</a></li>
          </ul>
        </nav>
      </div>
      <div className="section-right">
        <form className="profile-form1">
          <h2>Informations personnelles</h2>
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input type="text" id="lastname" name="lastname" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input type="text" id="address" name="address" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
