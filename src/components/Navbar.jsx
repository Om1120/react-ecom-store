import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar(props) {

  // true if screen is small (phone), false if big (computer)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // true if the mobile menu is open
  const [isOpen, setIsOpen] = useState(false);

  // this runs once when page loads - it watches if user resizes window
  useEffect(function() {
    function checkSize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setIsOpen(false); // close menu if window gets big
      }
    }
    window.addEventListener('resize', checkSize);

    // cleanup - stop watching when component is removed
    return function() {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  // open or close the menu
  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  // close the menu (used when clicking a link)
  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">

        {/* website logo - clicking goes home */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          E<span>com</span>
        </Link>

        {/* show desktop links only on big screens */}
        {isMobile === false &&
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Categories</NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
            </li>
          </ul>
        }

        <div className="navbar-actions">

          {/* cart icon - shows red number if there are items */}
          <Link to="/cart" className="cart-icon-btn" onClick={closeMenu}>
            <i className="fa-solid fa-cart-shopping"></i>
            {props.cartCount > 0 &&
              <span className="cart-badge">{props.cartCount}</span>
            }
          </Link>

          {/* hamburger button only on mobile */}
          {isMobile === true &&
            <button onClick={toggleMenu} className={'menu-toggle-btn ' + (isOpen ? 'open' : '')}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          }
        </div>

        {/* dropdown menu for mobile */}
        {isMobile === true &&
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
        }

      </div>
    </nav>
  );
}

export default Navbar;
