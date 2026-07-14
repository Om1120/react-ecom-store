import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({ cartCount }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          E<span>com</span>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Categories</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
            </li>
          </ul>
        )}

        <div className="navbar-actions">
          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon-btn" onClick={closeMenu}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* Mobile hamburger menu toggle */}
          {isMobile && (
            <button onClick={toggleMenu} className={'menu-toggle-btn ' + (isOpen ? 'open' : '')}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

        {/* Mobile dropdown menu */}
        {isMobile && (
          <ul className={'mobile-nav-menu ' + (isOpen ? 'open' : '')}>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Products
              </NavLink>
            </li>
          </ul>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
