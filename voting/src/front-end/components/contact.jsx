import React, { useState } from 'react';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import locationIcon from '../images/location.png';
import emailIcon from '../images/email.png';
import phoneIcon from '../images/phone.png';


library.add(faFacebookF, faTwitter, faInstagram, faLinkedinIn);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Nos contact</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src={locationIcon} className="icon" alt="Location" />
              <p>12 abidjan 105 rue14 11553</p>
            </div>
            <div className="information">
              <img src={emailIcon} className="icon" alt="Email" />
              <p>hayoudel@gmail.com</p>
            </div>
            <div className="information">
              <img src={phoneIcon} className="icon" alt="Phone" />
              <p>0789873943</p>
            </div>
          </div>

          <div className="social-media">
            <p>Suivez-nous sur nos réseaux sociaux:</p>
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
        </div>

        <div className="contact-form">
          

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="title">Contactez-nous</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="name">Prénon</label>
              <span>Prénon</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="email">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
              />
              <label htmlFor="phone">Téléphone</label>
              <span>Téléphone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Envoyer" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
