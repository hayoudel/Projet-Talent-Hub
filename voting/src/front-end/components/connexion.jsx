import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/connexion.css";

function Connexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/connexion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, mot_de_passe: password }),
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Email ou mot de passe incorrect');
                } else {
                    throw new Error('Erreur lors de la connexion de l\'utilisateur');
                }
            }

            const data = await response.text();
            console.log(data); // Affichez la réponse du backend dans la console

            // Rediriger vers la page de profil après une connexion réussie
            navigate('/');
        } catch (error) {
            console.error('Erreur lors de la connexion : ', error.message);
            // Gestion des erreurs ici, par exemple en affichant un message à l'utilisateur
        }
    };

    return (
        <div className="container">
            <div className="box1">
                <div className="form-section1">
                    <form onSubmit={handleSubmit}>
                        <h2>Se connecter</h2>
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
                <div className="image-section1">
                    {/* If you want to use an image as background, you can set it via CSS */}
                    {/* <img src={tonImage} alt="Image de Connexion" /> */}
                </div>
            </div>
        </div>
    );
}

export default Connexion;
