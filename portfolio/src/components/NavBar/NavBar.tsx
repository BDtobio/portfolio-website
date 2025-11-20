import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* LOGO */}
        <div className={styles.logo}>
          <Link to="/">Tobias.dev</Link>
        </div>

        {/* HAMBURGER MENU */}
        <div
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>Proyectos</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>Contacto</Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
