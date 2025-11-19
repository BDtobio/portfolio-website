const projects = [
  {
    title: 'Portfolio Web',
    description: 'Mi sitio personal donde muestro proyectos y escribo sobre desarrollo.',
    link: 'https://tusitio.com',
    repo: 'https://github.com/tuusuario/portfolio'
  },
  {
    title: 'Ecommerce React',
    description: 'Una tienda online con carrito, filtros y autenticación.',
    link: 'https://ecommerce-demo.com',
    repo: 'https://github.com/tuusuario/ecommerce-react'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg text-left">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-red-400 hover:underline"
                >
                  Ver demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-red-400 hover:underline"
                >
                  Código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
