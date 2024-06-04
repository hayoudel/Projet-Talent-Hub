import React from "react";
import "../css/inscription.css";

function Inscription() {
    return (
        <div className="container">
            <div className="box2">
            <div className="image-section2">
                    {/* Si tu veux utiliser l'image comme fond, pas besoin de balise img ici */}
                    {/* <img src={tonImage} alt="Image d'inscription" /> */}
                </div>
                <div className="form-section2">
                    <form>
                        <h2>Inscription</h2>
                        
                        <div className="name-fields">
                            <div className="field">
                                <label htmlFor="prenom">Prénom :</label>
                                <input type="text" id="prenom" name="prenom" required />
                            </div>
                            <div className="field">
                                <label htmlFor="nom">Nom :</label>
                                <input type="text" id="nom" name="nom" required />
                            </div>
                        </div>
                        
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" id="password" name="password" required />
                        
                        <button type="submit">S'inscrire</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Inscription