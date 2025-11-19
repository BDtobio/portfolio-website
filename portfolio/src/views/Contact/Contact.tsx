import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-center text-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="mb-4">¿Te interesa trabajar conmigo o querés saludarme?</p>
      <p className="text-lg text-red-400 font-semibold">
        📧 <a href="mailto:tobiasbustosdiaco@gmail.com" className="hover:underline">tobiasbustosdiaco@gmail.com</a>
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://github.com/BDtobio" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-500">
          <FaGithub size={32} />
        </a>
        <a href="https://www.instagram.com/tobias_diaco22" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-pink-500">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.linkedin.com/in/tobias-bustos-dev" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-700">
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
}
