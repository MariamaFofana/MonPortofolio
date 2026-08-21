import React, { useState, useEffect } from "react";
import "./News.css";

import cvFR from "../../FICHIER/CV_FofanaMariama_StageData.pdf"; 
import cvEN from "../../FICHIER/CV_FofanaMariama-Internship .pdf";

const News = () => {
  const msgFR = "🎯 Je suis actuellement à la recherche d'un stage de 6 mois à l'étranger en Data Science & IA, à partir de Janvier.";
  const msgEN = "🎯 I am currently looking for a 6-month internship abroad in Data Science & AI, starting in January.";

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 180000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="news">
      <p className="news-message" key={animationKey}>
        
        {/* --- BLOC FRANÇAIS --- */}
        <span className="lang-block">
          {msgFR}{" "}
          <a href={cvFR} download="CV_Mariama_Fofana_FR.pdf" className="news-link">
            📄 CV (FR)
          </a>
        </span>

        <span className="separator"> &nbsp;&nbsp;|&nbsp;&nbsp; </span>

        {/* --- BLOC ANGLAIS --- */}
        <span className="lang-block">
          {msgEN}{" "}
          <a href={cvEN} download="CV_Mariama_Fofana_EN.pdf" className="news-link">
            📄 CV (EN)
          </a>
        </span>

      </p>
    </section>
  );
};

export default News;