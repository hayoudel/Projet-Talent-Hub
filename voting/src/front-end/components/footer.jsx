import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/footer.css'; // Assurez-vous de créer ce fichier CSS pour styliser votre footer selon vos besoins.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section about">
        <div className="logo-text">VOTING</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis gravida sapien, nec accumsan magna.
        </p>
        <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </div>
      </div>

      <div className="footer-section-links">
        <h2>Liens rapides</h2>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="./contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section-contact">
        <h2>Nos contacts</h2>
        <p>123 Rue de la Rue</p>
        <p>hayoudel@gmail.com</p>
        <p>+225 0789873943</p>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Delphine Hayicou. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
