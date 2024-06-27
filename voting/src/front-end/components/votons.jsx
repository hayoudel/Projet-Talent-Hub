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
            const filteredVotes = data.votes.filter(vote => vote.userId === user.id);
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

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };

  const handleVote = async (voteId, candidateName) => {
    try {
      const response = await fetch(`http://localhost:5000/api/vote/${voteId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          candidate: candidateName,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to vote');
      }
  
      const data = await response.json();
      console.log('Vote response:', data); // Vérifie la réponse de l'API
  
      const updatedVotes = userVotes.map(vote => {
        if (vote.id === voteId) {
          return {
            ...vote,
            voted: true,
            votedCandidate: candidateName,
          };
        }
        return vote;
      });
  
      console.log('Updated votes:', updatedVotes); // Vérifie les votes mis à jour
  
      setUserVotes(updatedVotes);
    } catch (error) {
      console.error('Error voting:', error.message);
    }
    console.log('handleVote')
  };
  

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
            <li><a href="/votez">Votez</a></li>
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
                  <p>Temps: {formatDate(vote.duration)}</p>
                  {vote.candidates && typeof vote.candidates === 'string' ? (
                    <div>
                      <h4>Candidats</h4>
                      <ul>
                        {JSON.parse(vote.candidates).map((candidate, index) => (
                          <li key={index}>
                            <FontAwesomeIcon icon={faUser} /> {candidate}
                            {!vote.voted ? (
                              <button onClick={() => handleVote(vote.id, candidate)}>Voter</button>
                            ) : vote.votedCandidate === candidate ? (
                              <span>Vous avez voté pour ce candidat</span>
                            ) : null}
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
