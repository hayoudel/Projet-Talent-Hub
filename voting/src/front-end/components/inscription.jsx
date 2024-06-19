import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/inscription.css";

function Inscription() {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prenom, nom, email, mot_de_passe: motDePasse }),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'inscription de l\'utilisateur');
            }

            const data = await response.text();
            console.log(data); // Affichez la réponse du backend dans la console

            // Rediriger vers la page de connexion après une inscription réussie
            navigate('/connexion');
        } catch (error) {
            console.error('Erreur lors de l\'inscription : ', error);
            // Gestion des erreurs ici
        }
    };

    return (
        <div className="container">
            <div className="box2">
                <div className="image-section2">
                    {/* Si tu veux utiliser l'image comme fond, pas besoin de balise img ici */}
                    {/* <img src={tonImage} alt="Image d'inscription" /> */}
                </div>
                <div className="form-section2">
                    <form onSubmit={handleSubmit}>
                        <h2>Inscription</h2>
                        
                        <div className="name-fields">
                            <div className="field">
                                <label htmlFor="prenom">Prénom :</label>
                                <input 
                                    type="text" 
                                    id="prenom" 
                                    name="prenom" 
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    required 
                                />
                            </div>
                            <div className="field">
                                <label htmlFor="nom">Nom :</label>
                                <input 
                                    type="text" 
                                    id="nom" 
                                    name="nom" 
                                    value={nom}
                                    onChange={(e) => setNom(e.target.value)}
                                    required 
                                />
                            </div>
                        </div>
                        
                        <label htmlFor="email">Email :</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />

                        <label htmlFor="password">Mot de passe :</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={motDePasse}
                            onChange={(e) => setMotDePasse(e.target.value)}
                            required 
                        />
                        
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Inscription;
