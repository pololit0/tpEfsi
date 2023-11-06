import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Info">Acerca de Mí</Link>
          </li>
          <li>
            <Link to="/Creaciones">Mis Creaciones</Link>
          </li>
          <li>
            <Link to="/Favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
