import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 
import '../css/profile.css';
import AuthContext from './AuthContext'; // Assurez-vous d'importer le contexte d'authentification

const Profile = () => {
  const { user } = useContext(AuthContext); // Accéder aux informations de l'utilisateur depuis le contexte

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
          <h2>{user ? `${user.prenom} ${user.nom}` : 'Nom Utilisateur'}</h2> {/* Afficher le nom de l'utilisateur */}
        </div>
        <nav>
          <ul>
            <li><a href="/profile">Informations personnelles</a></li>
            <li><a href="/votecreer">vote Créer</a></li>
            <li><a href="/resultatvote">Résultat des votes</a></li>
          </ul>
        </nav>
      </div>
      <div className="section-right">
        <form className="profile-form1">
          <h2>Informations personnelles</h2>
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={user ? user.prenom : ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={user ? user.nom : ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user ? user.email : ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              id="address"
              name="address"
              value={user ? user.address : ''}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user ? user.phone : ''}
              readOnly
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
