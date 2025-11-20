import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    gmail: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Enviando...");

    const formElement = e.currentTarget as HTMLFormElement; // ✔ CASTEO CORRECTO

    emailjs
      .sendForm(
        "service_ts9zmsp",     // SERVICE ID
        "template_4ry196q",    // TEMPLATE ID
        formElement,           // ✔ FORMULARIO CORRECTO
        "Ym007lHYYYJIuKUTL"    // PUBLIC KEY
      )
      .then(
        () => {
          setStatus("Mensaje enviado con éxito ✔");
          setForm({ nombre: "", gmail: "", mensaje: "" });
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
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="gmail"
          placeholder="Tu gmail"
          value={form.gmail}
          onChange={handleChange}
          required
        />

        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar mensaje</button>

        {status && <p className={styles.status}>{status}</p>}
      </form>

      {/* EMAIL DIRECTO */}
      <div className={styles.emailBox}>
        <span className={styles.emailIcon}>📧</span>
        <a
          href="mailto:tobiasbustosdiaco@gmail.com"
          className={styles.emailLink}
        >
          tobiasbustosdiaco@gmail.com
        </a>
      </div>

      {/* REDES */}
      <div className={styles.socials}>
        <a
          href="https://github.com/BDtobio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.instagram.com/tobias_diaco22"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaInstagram size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/tobias-bustos-dev"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
}
