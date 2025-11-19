import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav
  className="fixed top-0 left-0 w-full shadow-md z-50 bg-blue-100"
>
  
      <div className="max-w-7xl mx-auto px-6">
        <ul className="list-none flex justify-center space-x-12 py-4 text-white text-lg font-semibold">
          <li>
            <Link to="/" className="no-underline hover:text-blue-300 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/projects" className="no-underline hover:text-blue-300 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="no-underline hover:text-blue-300 transition">
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/about" className="no-underline hover:text-blue-300 transition">
              Sobre Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
