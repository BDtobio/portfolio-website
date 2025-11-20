import styles from "./Projects.module.css";

const projects = [
  {
    title: "Portfolio Web",
    description:
      "Mi sitio personal donde muestro proyectos, tecnologías y un poco sobre mi trabajo.",
    link: "https://tusitio.com",
    repo: "https://github.com/tuusuario/portfolio",
  },
  {
    title: "Ecommerce React",
    description:
      "Una tienda online moderna con carrito, filtros por categoría, login y panel de productos.",
    link: "https://ecommerce-demo.com",
    repo: "https://github.com/tuusuario/ecommerce-react",
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Proyectos</h2>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>

              <div className={styles.buttons}>
                <a href={project.link} target="_blank" className={styles.demoBtn}>
                  Ver Demo
                </a>
                <a href={project.repo} target="_blank" className={styles.codeBtn}>
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
