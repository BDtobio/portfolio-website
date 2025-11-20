import styles from "./Hero.module.css";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb
} from "react-icons/si";

export default function Hero() {
  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className={styles.heroSection}>

        <div className={styles.glowWrapper}>
          <div className={styles.glow}></div>
        </div>

        <div className={styles.imageContainer}>
          <img
            src="/perfill.jpeg"
            alt="Tobias Alejandro Bustos Diaco"
            className={styles.image}
          />
        </div>

        <h1 className={`${styles.heroName} ${styles.gradientText}`}>
          Tobias Alejandro Bustos Diaco
        </h1>

        <h2 className={styles.role}>Desarrollador Frontend · UI Developer</h2>

        <p className={styles.description}>
          Transformo ideas en experiencias digitales rápidas, modernas y visualmente atractivas.
          Enfocado en interfaces limpias, intuitivas y con alto rendimiento.
        </p>

        <p className={styles.stack}>
          <span className={styles.bold}>Next.js</span> · React · TypeScript · CSS · UI/UX · Performance
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryButton}>Ver mis proyectos</a>
          <a href="#contact" className={styles.secondaryButton}>Contactarme</a>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section className={styles.techSection}>
        <h3 className={styles.techTitle}>Tecnologías que uso</h3>

        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <SiHtml5 size={45} />
            <span>HTML</span>
          </div>

          <div className={styles.techItem}>
            <SiCss3 size={45} />
            <span>CSS</span>
          </div>

          <div className={styles.techItem}>
            <SiJavascript size={45} />
            <span>JavaScript</span>
          </div>

          <div className={styles.techItem}>
            <SiReact size={45} />
            <span>React</span>
          </div>

          <div className={styles.techItem}>
            <SiNextdotjs size={45} />
            <span>Next.js</span>
          </div>

          

          <div className={styles.techItem}>
            <SiPostgresql size={45} />
            <span>PostgreSQL</span>
          </div>

          <div className={styles.techItem}>
            <SiMongodb size={45} />
            <span>MongoDB</span>
          </div>
        </div>
      </section>
    </>
  );
}
