import styles from "./Hero.module.css";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb
} from "react-icons/si";

export default function Hero() {
  return (
    <>
      {/* HERO PRINCIPAL */}
     <section className={`${styles.heroSection} ${styles.fadeIn}`}>

  <video
    className={styles.videoBackground}
    src="/videos/video3.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className={styles.blueOverlay}></div>

        <h1 className={`${styles.heroName} ${styles.gradientText}`}>
          FULL STACK DEVELOPER
        </h1>

        <h2 className={styles.role}>Tobias Alejandro Bustos Diaco</h2>


        <div className={styles.imageContainer}>
          <img
            src="/perfill.jpeg"
            alt="Tobias Alejandro Bustos Diaco"
            className={styles.image}
          />
        </div>


        <p className={styles.description}>
          Transformo ideas en experiencias digitales rápidas, modernas y visualmente atractivas.
          Enfocado en interfaces limpias, intuitivas y con alto rendimiento.
        </p>

        <div className={styles.buttons}>
          <a href="/projects" className={styles.primaryButton}>Ver mis proyectos</a>
          <a href="/contact" className={styles.secondaryButton}>Contactarme</a>
          <a href="/CV_Tobias_Bustos.pdf" className={styles.cvButton} download>
            Descargar CV
          </a>
        </div>
      </section>
      
{/* SOBRE MÍ */}
<section className={styles.aboutSection}>
  <h3 className={styles.aboutTitle}>Sobre mí</h3>

  <p className={styles.aboutText}>
    Soy un desarrollador Full Stack en crecimiento, apasionado por crear experiencias digitales claras, modernas y 
    visualmente profesionales. Me enfoco en interfaces limpias, rendimiento y detalles que hacen la diferencia.
  </p>

  <p className={styles.aboutText}>
    Me formé construyendo proyectos reales: páginas para boliches, restaurantes, tiendas de ropa y sitios modernos 
    para marcas. Busco mejorar constantemente, aprender nuevas tecnologías y llevar cada proyecto a un nivel más alto.
  </p>

  <p className={styles.aboutText}>
    Tengo facilidad para comunicarme, trabajar con clientes y entender lo que necesitan para transformar una idea en 
    un producto funcional. Mi objetivo es seguir creciendo como desarrollador y aportar valor en cada proyecto que hago.
  </p>
</section>

      {/* TECNOLOGÍAS */}
      <section className={styles.techSection}>
        <h3 className={styles.techTitle}>Tecnologías que uso</h3>

        {/* FRONTEND */}
        <h4 className={styles.techSubtitle}>Frontend</h4>
        <div className={styles.techGrid}>
          <div className={styles.techItem}><SiHtml5 size={45} /><span>HTML</span></div>
          <div className={styles.techItem}><SiCss3 size={45} /><span>CSS</span></div>
          <div className={styles.techItem}><SiJavascript size={45} /><span>JavaScript</span></div>
          <div className={styles.techItem}><SiReact size={45} /><span>React</span></div>
          <div className={styles.techItem}><SiNextdotjs size={45} /><span>Next.js</span></div>
        </div>

        {/* BACKEND */}
        <h4 className={styles.techSubtitle}>Backend</h4>
        <div className={styles.techGrid}>
          <div className={styles.techItem}><SiNodedotjs size={45} /><span>Node.js</span></div>
        </div>

        {/* BASES DE DATOS */}
        <h4 className={styles.techSubtitle}>Bases de Datos</h4>
        <div className={styles.techGrid}>
          <div className={styles.techItem}><SiPostgresql size={45} /><span>PostgreSQL</span></div>
          <div className={styles.techItem}><SiMongodb size={45} /><span>MongoDB</span></div>
        </div>
      </section>
    </>
  );
}
