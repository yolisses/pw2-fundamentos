import { FormEvent, useState } from "react";
import "./Contact.css";
import { useMeet } from "./MeetContext";

export function Contact() {
  const [text, setText] = useState("");
  const { addMessage } = useMeet();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (text) addMessage(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="contact">
        <input
          type="text"
          name="message"
          className="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Enviar mensagem para Fábio..."
        />
        <button type="submit" className="submit" disabled={!text}>
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
    </form>
  );
}
