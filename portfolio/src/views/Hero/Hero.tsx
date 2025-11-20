import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>

      {/* Glow detrás */}
      <div className={styles.glowWrapper}>
        <div className={styles.glow}></div>
      </div>

      {/* Imagen */}
      <div className={styles.imageContainer}>
        <img src="/perfil.jpg" alt="Tobias Alejandro Bustos Diaco" className={styles.image}/>
      </div>

      {/* Nombre */}
      <h1 className={`${styles.heroName} ${styles.gradientText}`}>
        Tobias Alejandro Bustos Diaco
      </h1>

      {/* Rol */}
      <h2 className={styles.role}>
        Desarrollador Frontend · UI Developer
      </h2>

      {/* Descripción */}
      <p className={styles.description}>
        Transformo ideas en experiencias digitales rápidas, modernas y visualmente atractivas.
        Enfocado en interfaces limpias, intuitivas y con alto rendimiento.
      </p>

      {/* Stack */}
      <p className={styles.stack}>
        <span className={styles.bold}>Next.js</span> · React · TypeScript · Tailwind CSS · UI/UX · Performance
      </p>

      {/* Botones */}
      <div className={styles.buttons}>
        <a href="#projects" className={styles.primaryButton}>
          Ver mis proyectos
        </a>

        <a href="#contact" className={styles.secondaryButton}>
          Contactarme
        </a>
      </div>
    </section>
  );
}
