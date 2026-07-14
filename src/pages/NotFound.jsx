import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className="container">
      <div className="notfound-container">
        <div className="notfound-code">404</div>
        <h2 className="notfound-title">Page Not Found</h2>
        <p className="notfound-desc">
          This page does not exist. Maybe you typed the wrong URL.
        </p>
        <Link to="/" className="notfound-home-btn">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
