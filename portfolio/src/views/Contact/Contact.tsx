import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .send(
        "TU_SERVICE_ID",
        "TU_TEMPLATE_ID",
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "TU_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Mensaje enviado con éxito ✔");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Hubo un error. Intentá de nuevo ❌");
        }
      );
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Contacto</h2>

      <p className={styles.subtitle}>
        ¿Te interesa trabajar conmigo o querés saber sobre mi trabajo?
      </p>

      {/* FORMULARIO */}
      <form className={styles.form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar mensaje</button>

        {status && <p className={styles.status}>{status}</p>}
      </form>

      {/* EMAIL DIRECTO */}
      <div className={styles.emailBox}>
        <span className={styles.emailIcon}>📧</span>
        <a href="mailto:tobiasbustosdiaco@gmail.com" className={styles.emailLink}>
          tobiasbustosdiaco@gmail.com
        </a>
      </div>

      {/* REDES */}
      <div className={styles.socials}>
        <a href="https://github.com/BDtobio" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaGithub size={32} />
        </a>
        <a href="https://www.instagram.com/tobias_diaco22" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram size={32} />
        </a>
        <a href="https://www.linkedin.com/in/tobias-bustos-dev" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
}
