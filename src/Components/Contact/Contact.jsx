import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
        <h2>Merci bien !</h2>
        <p>Je vous répondrai dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <section className="contact-section">
      <h2>
        <i className="ri-chat-smile-3-line"></i> Souhaitez-vous laisser un
        message !
      </h2>
      <div className="subscribe">
        <form onSubmit={sendEmail} method="POST">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Votre nom"
              name="from_name"
              required
              className="input-field"
              aria-label="Votre nom"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              name="from_email"
              required
              className="input-field"
              aria-label="Votre email"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Votre message"
              name="message"
              required
              className="textarea-field"
              aria-label="Votre message"
            />
          </div>
          <div className="mb-3">
            <button
              className="buttonS"
              type="submit"
              aria-label="Envoyer le message"
            >
              Envoyer
            </button>
          </div>
          {error && (
            <p className="error-message">
              Une erreur est survenue lors de l'envoi.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
