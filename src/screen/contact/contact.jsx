import React from 'react';
import Navbar from '../../navBar/navbar';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './ContactScreen.css';

const ContactScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-details">
            <p>
              We're here to assist you with any inquiries or assistance you may need.
              Reach out to us via email or find us on social media.
            </p>
            <p>Email: thiru260402@gmail.com</p>
            <p>Address: Madurai, Tamil Nadu, India</p>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Thirumalaiboobathi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub />
              <span className="icon-text">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/thirumalaiboobathi/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram />
              <span className="icon-text">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thirumalaiboobathi-b-902a51233/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin />
              <span className="icon-text">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
