import React, { useState, useEffect ,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons'; 
import '../css/profile.css';
import AuthContext from './AuthContext'; // Assurez-vous d'importer le contexte d'authentification

const Votecreer = () => {
  const { user } = useContext(AuthContext); // Accéder aux informations de l'utilisateur depuis le contexte
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/votes?userId=${user.id}`)
        .then(response => response.json())
        .then(data => setVotes(data))
        .catch(error => console.error('Error fetching votes:', error));
    }
  }, [user]);

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
            <li><a href="/votecreer">Vote Créer</a></li>
            <li><a href="/resultatvote">Résultat des votes</a></li>
          </ul>
        </nav>
      </div>
      <div className="section-right">
        <div className="profile-form1">
          <h2>Votes créés</h2>
          <ul>
            {votes.map((vote) => (
              <li key={vote.id}>
                <strong>{vote.title}</strong>
                <p>{vote.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Votecreer;
/**
 * import AuthContext from './AuthContext'; // Assurez-vous d'importer le contexte d'authentification
 *   const { user } = useContext(AuthContext); // Accéder aux informations de l'utilisateur depuis le contexte
 *  <h2>{user ? `${user.prenom} ${user.nom}` : 'Nom Utilisateur'}</h2> {/* Afficher le nom de l'utilisateur */
 /** */
 