import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>

        {/* LOGO */}
        <Link to="/" className={styles.logo}>Tobias.dev</Link>

        {/* HAMBURGER */}
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <span className={`${open ? styles.openLine1 : ""}`}></span>
          <span className={`${open ? styles.openLine2 : ""}`}></span>
          <span className={`${open ? styles.openLine3 : ""}`}></span>
        </div>

        {/* LINKS */}
        <ul className={`${styles.navLinks} ${open ? styles.open : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link to="/projects" onClick={() => setOpen(false)}>Proyectos</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contacto</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
