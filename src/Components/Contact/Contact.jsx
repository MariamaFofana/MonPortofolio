import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { translations } from "../Translations/translations"; 
const Contact = ({ lang = "fr" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const t = translations[lang].contact;

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);

    emailjs
      .send(
        "service_ro7w70c",
        "template_0n0flif",
        {
          from_name: e.target.from_name.value,
          from_email: e.target.from_email.value,
          message: e.target.message.value,
        },
        "dCqoKDN7qVyjNNlqD"
      )
      .then((result) => {
        console.log("Email envoyé avec succès :", result.text);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
        setError(true);
      });
  };

  if (submitted) {
    return (
      <div className="reponse">
        <h2>{t.successTitle}</h2>
        <p>{t.successText}</p>
      </div>
    );
  }

  return (
    <section className="contact-section">
      <h2>
        <i className="ri-chat-smile-3-line"></i> {t.title}
      </h2>
      <div className="subscribe">
        <form onSubmit={sendEmail} method="POST">
          <div className="mb-3">
            <input
              type="text"
              placeholder={t.namePlaceholder}
              name="from_name"
              required
              className="input-field"
              aria-label={t.namePlaceholder}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              name="from_email"
              required
              className="input-field"
              aria-label={t.emailPlaceholder}
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder={t.messagePlaceholder}
              name="message"
              required
              className="textarea-field"
              aria-label={t.messagePlaceholder}
            />
          </div>
          <div className="mb-3">
            <button
              className="buttonS"
              type="submit"
              aria-label={t.sendBtn}
            >
              {t.sendBtn}
            </button>
          </div>
          {error && (
            <p className="error-message">
              {t.errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;