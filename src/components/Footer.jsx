import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">

        {/* column 1 - about the shop */}
        <div className="footer-col footer-about">
          <h3>Ecom</h3>
          <p>
            We sell all kinds of products like electronics, clothes, beauty stuff and more. Hope you find what you need!
          </p>
        </div>

        {/* column 2 - page links */}
        <div className="footer-col">
          <h3>Pages</h3>
          <ul className="footer-links">
            <li><Link to="/">Categories</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>

        {/* column 3 - contact details */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul className="footer-contact-info">
            <li><i className="fa-solid fa-location-dot"></i> 512 creative institute raspan arced</li>
            <li><i className="fa-solid fa-phone"></i> +91 081400 07751</li>
            <li><i className="fa-solid fa-envelope"></i> creativeinstitute@gmail.com</li>
          </ul>
        </div>

        {/* column 4 - social media */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <p style={{ fontSize: '14px', color: '#94a3b8' }}>Aapno sath sauno vikas</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
