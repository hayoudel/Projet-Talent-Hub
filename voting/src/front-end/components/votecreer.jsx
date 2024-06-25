import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/profile.css';
import AuthContext from './AuthContext';

const Votecreer = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [userVotes, setUserVotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserVotes = async () => {
      if (isLoggedIn && user) {
        try {
          const response = await fetch(`http://localhost:5000/api/votes?userId=${user.id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch votes');
          }
          const data = await response.json();
          console.log('API response:', data);
          
          if (data && data.votes && data.votes.length > 0) {
            // Filtrer les votes pour l'utilisateur connecté
            const filteredVotes = data.votes.filter(vote => vote.userId === user.id);

            // Trier les votes par ordre de création (exemple : par id)
            filteredVotes.sort((a, b) => a.id - b.id);

            setUserVotes(filteredVotes);
          } else {
            throw new Error('API response does not contain votes');
          }
          setLoading(false);
        } catch (error) {
          console.error('Error fetching votes:', error.message);
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchUserVotes();
  }, [isLoggedIn, user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading votes: {error}</p>;
  }

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
          <h2>{user ? `${user.prenom} ${user.nom}` : 'Nom Utilisateur'}</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/profile">Dossiers personnels</a></li>
            <li><a href="/votecreer">Vote Créer</a></li>
            <li><a href="/resultatvote">Résultat des votes</a></li>
          </ul>
        </nav>
      </div>
      <div className="section-right">
        <div className="profile-form1">
          <h2>Votes créés par {user.prenom}</h2>
          {userVotes.length > 0 ? (
            <ul>
              {userVotes.map(vote => (
                <li key={vote.id}>
                  <h3>Vote créé numéro {vote.id}</h3>
                  <h4>{vote.title}</h4>
                  <p>{vote.description}</p>
                  <p>Temps: {vote.duration} minutes</p>
                  {vote.candidates && typeof vote.candidates === 'string' ? (
                    <div>
                      <h4>Candidats</h4>
                      <ul>
                        {JSON.parse(vote.candidates).map((candidate, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faUser} /> {candidate}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>Aucun candidat trouvé pour ce vote</p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun vote trouvé pour {user.prenom}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Votecreer;
