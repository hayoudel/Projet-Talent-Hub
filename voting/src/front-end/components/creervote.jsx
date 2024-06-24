import React, { useState } from 'react';
import "../css/creervote.css";

function Createvote() {
  const [title, setTitle] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [candidates, setCandidates] = useState(['']);

  const options = ['Élève', 'Entreprise', 'Association', 'Autres'];

  const handleCandidateChange = (index, value) => {
    const newCandidates = [...candidates];
    newCandidates[index] = value;
    setCandidates(newCandidates);
  };

  const handleAddCandidate = () => {
    setCandidates([...candidates, '']);
  };

  const handleRemoveCandidate = (index) => {
    const newCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(newCandidates);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !selectedOption || !duration || candidates.some(candidate => candidate.trim() === '')) {
      setMessage('Veuillez remplir tous les champs requis.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/createvote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          selectedOption,
          duration,
          description,
          candidates
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create vote');
      }

      setMessage('Le vote a été créé avec succès!');

      // Optionally reset the form
      setTitle('');
      setSelectedOption('');
      setDuration('');
      setDescription('');
      setCandidates(['']);
    } catch (error) {
      console.error('Error creating vote:', error.message);
      setMessage('Erreur lors de la création du vote.');
    }
  };

  return (
    <div className="create-vote-container">
      <h2>Créer un nouveau vote</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre du vote:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Options:</label>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="" disabled>Choisissez une option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nom des Candidats:</label>
          {candidates.map((candidate, index) => (
            <div key={index}>
              <input
                type="text"
                value={candidate}
                onChange={(e) => handleCandidateChange(index, e.target.value)}
                required
              />
              {candidates.length > 1 && (
                <button type="button" onClick={() => handleRemoveCandidate(index)}>
                  Supprimer
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddCandidate}>Ajouter un candidat</button>
        </div>
        <div>
          <label>Durée du vote (en heures):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description (optionnelle):</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Créer le vote</button>
      </form>
    </div>
  );
}

export default Createvote;
