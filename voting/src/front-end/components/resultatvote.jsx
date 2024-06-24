import React, { useContext } from 'react';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 
import '../css/profile.css';
import AuthContext from './AuthContext'; // Assurez-vous d'importer le contexte d'authentification

const Resultatvote= () => {
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
          </a> <br /> 
          <h2>{user ? `${user.prenom} ${user.nom}` : 'Nom Utilisateur'}</h2> {/* Afficher le nom de l'utilisateur */}
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
