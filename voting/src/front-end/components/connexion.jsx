import React from "react";
import "../css/connexion.css";
function Connexion() {
    return (
        <div className="container">
            <div className="box1">
          
                <div className="form-section1">
                    <form>
                        <h2>Se connecter</h2>
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" id="password" name="password" required />
                        
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
                <div className="image-section1">
                    {/* Si tu veux utiliser l'image comme fond, pas besoin de balise img ici */}
                    {/* <img src={tonImage} alt="Image d'Connexion" /> */}
                </div>
            </div>
        </div>
    );
}
export default Connexion