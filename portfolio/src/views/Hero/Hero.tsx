export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-blue-900 text-white p-8 text-center relative">
      
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-lg mb-4">
  <img 
    src="/perfil.jpg" 
    alt="Tobias Alejandro Bustos Diaco" 
    className="w-full h-full object-cover"
  />
</div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 relative inline-block hero-name">
        Tobias Alejandro Bustos Diaco
      </h1>
      
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        Desarrollador FrontEnd
      </h2>
      
      <p className="text-xl mb-8 max-w-xl mx-auto">
        Construyo experiencias web modernas y eficientes utilizando las mejores tecnologías del mercado. Apasionado por crear interfaces limpias, rápidas y responsivas.
      </p>
      
      <p className="mb-6 italic">
        Especializado en Next.js, React, JavaScript, TypeScript, Tailwind CSS, CSS y HTML.
      </p>
      
      <a 
        href="#projects" 
        className="bg-red-500 px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition"
      >
        Ver mis proyectos
      </a>

      {/* Gradiente animado */}
      <style>{`
        .hero-name {
          background: linear-gradient(
            90deg, 
            #b8860b 25%,    
            #ffd700 40%,    
            #fffacd 50%,    
            #ffd700 60%,    
            #b8860b 75%     
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </section>
  )
}
