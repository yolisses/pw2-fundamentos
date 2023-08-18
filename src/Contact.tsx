import "./Contact.css";

export function Contact() {
  return (
    <div className="contact">
      <input
        type="text"
        name="message"
        className="text"
        placeholder="Enviar mensagem para Fábio..."
      />
      <button type="submit" className="submit">
        Publicar
      </button>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/5439572987593"
      >
        <img src="/phone.png"></img>
      </a>
      <button type="button">
        <img src="/shield.png"></img>
      </button>
    </div>
  );
}
