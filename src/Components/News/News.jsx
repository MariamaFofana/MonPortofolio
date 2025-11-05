import React, { useState, useEffect } from "react";
import "../News/News.css";
import cvLinkFile from "../../FICHIER/DIAMariama_Fofana_CV.pdf";

const News = ({ message, cvLink }) => {
  const newsMessage =
    message || "🎯 Je suis actuellement à la recherche d'un stage de 4 mois de Janvier en Avril 2026 en Data Science & IA.";
  const newsCV = cvLink || cvLinkFile;

  const [displayMessage, setDisplayMessage] = useState(newsMessage);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayMessage(""); 
      setTimeout(() => setDisplayMessage(newsMessage), 100); 
    }, 180000); 
    return () => clearInterval(interval);
  }, [newsMessage]);

  return (
    <section className="news">
      <p className="news-message">
        {displayMessage}{" "}
        <a href={newsCV} download>
          📄 Télécharger mon CV
        </a>
      </p>
    </section>
  );
};

export default News;
