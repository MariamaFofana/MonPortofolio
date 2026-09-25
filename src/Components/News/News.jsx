import React, { useState, useEffect } from "react";
import "./News.css";

import cvFR from "../../FICHIER/CV Stage/CV_FofanaMariama_StageData.pdf";
import cvEN from "../../FICHIER/CV Stage/CV_FofanaMariama-Internship .pdf";

const News = ({ lang = "fr" }) => {
  const msgFR = "🎯 Je suis actuellement à la recherche d'un stage de 4 à 5 mois à l'étranger en Data Science & IA, à partir de Septembre.";
  const msgEN = "🎯 I am currently looking for a 4 to 5-month internship abroad in Data Science & AI, starting in September.";

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 180000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="news">
      <div className="news-container" key={animationKey}>
        
        {lang === "fr" ? (
          /* --- BLOC FRANÇAIS --- */
          <span className="lang-block">
            {msgFR}{" "}
            <a href={cvFR} download="CV_Mariama_Fofana_FR.pdf" className="news-link">
              📄 Télécharger le CV (FR)
            </a>
          </span>
        ) : (
          /* --- BLOC ANGLAIS --- */
          <span className="lang-block">
            {msgEN}{" "}
            <a href={cvEN} download="CV_Mariama_Fofana_EN.pdf" className="news-link">
              📄 Download Resume (EN)
            </a>
          </span>
        )}

      </div>
    </section>
  );
};

export default News;