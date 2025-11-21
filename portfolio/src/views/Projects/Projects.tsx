import styles from "./Projects.module.css";

const projects = [
  {
    title: "Nightfall — Página de Boliche",
    description:
      "Sitio web moderno para una discoteca, con diseño oscuro, secciones dinámicas y experiencia fluida.",
    link: "https://nightfall-navy.vercel.app/",
    repo: "https://github.com/BDtobio/NIGHTFALL", // si querés te pongo el repo real
  },
  {
    title: "Italy Tasty — Restaurante Italiano",
    description:
      "Web completa para restaurante: reservas, menú, horarios, diseño elegante y estructura profesional.",
    link: "https://italianfooddrest.vercel.app/",
    repo: "https://github.com/BDtobio/ITALY-TASTY", // cambiar por repo real
  },
  {
    title: "LA SUITE — Boliche Premium",
    description:
      "Landing page profesional para un boliche VIP con estética premium, formulario y navegación moderna.",
    link: "https://la-suite-by-nightfall.vercel.app/",
    repo: "https://github.com/BDtobio/LA-SUITE-by-NIGHTFALL", // cambiar por repo real
  },
  {
    title: "Z33 Fits — Ecommerce de Ropa",
    description:
      "Tienda online con categorías, productos, diseño responsivo y estética urbana profesional.",
    link: "https://z33-fits.vercel.app/",
    repo: "https://github.com/BDtobio/Z33_FITS", // cambiar por repo real
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      
      {/* VIDEO DE FONDO */}
<video
  className={styles.videoBackground}
  src="/videos/video2.mp4"
  autoPlay
  loop
  muted
  playsInline
/>

{/* CAPA OSCURA */}
{/* <div className={styles.overlay}></div> */}

{/* CAPA AZUL */}
<div className={styles.blueOverlay}></div>


      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos</h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.buttons}>
                <a href={project.link} target="_blank" className={styles.demoBtn}>Ver Demo</a>
                <a href={project.repo} target="_blank" className={styles.codeBtn}>Código</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
