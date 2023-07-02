import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">FilmesPorGênero</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="basic-navbar-nav"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} id="basic-navbar-nav">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cadastrarfilme">Cadastrar filme</Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
