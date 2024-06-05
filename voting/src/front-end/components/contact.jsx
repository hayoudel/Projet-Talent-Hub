import React from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { AiOutlineEnvironment } from "react-icons/ai";
import "../css/contact.css";

function Contact() {
    return (
        <div className="container">
            <div className="box">
                <div className="info-section">
                    <div className="info-item">
                        <div className="icon1">
                            <FiPhoneCall  />
                        </div>
                        <div className="text1">
                            <h3>TELEPHONE</h3>
                            <p>+225 0789873943</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon2">
                            <FiMail  />
                        </div>
                        <div className="text2">
                            <h3>EMAIL</h3>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                    <div className="info-item">
                        <div className="icon3">
                        <AiOutlineEnvironment />
                        </div>
                        <div className="text3">
                            <h3>LOCALISATION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nesciunt!</p>
                        </div>
                    </div>
                </div>
                <div className="form-section">
                    <form>
                        <h2>Se connecter</h2>
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="password">Mot de passe :</label>
                        <input type="password" id="password" name="password" required />
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
