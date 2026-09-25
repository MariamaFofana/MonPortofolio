import React from "react";
import heroImg from "../../IMAGES/Photo1.jpg";
import "../Header/Header.css";
import { translations } from "../Translations/translations";

const Header = ({ lang = "fr" }) => {
  // Récupération des textes selon la langue active
  const t = translations[lang].home;

  return (
    <section className="home" id="home">
      {/* COLONNE GAUCHE : TEXTE & TIMELINE */}
      <div className="home-content">
        <span className="text-dark">{t.slogan}</span>
        <h3>{t.greeting}</h3>
        <h1>Mariama Fofana</h1>
        <h3>
          {lang === "fr" ? (
            <>
              Étudiante en <span>Ingénierie Informatique</span> <br />
              spécialisée en <span>Data Science & Intelligence Artificielle</span>
            </>
          ) : (
            <>
              Computer Engineering Student <br />
              specialized in <span>Data Science & Artificial Intelligence</span>
            </>
          )}
        </h3>
        <p>
          {t.desc1}
          <br /><br />
          {t.desc2}
        </p>       
      
        {/* --- DÉBUT DE LA TIMELINE DE CARRIÈRE --- */}
        <div className="career-timeline">
          {/* Étape 1 */}
          <div className="timeline-step">
            <div className="step-icon"><i className="ri-graduation-cap-fill"></i></div>
            <span className="step-text">{t.timeline.step1}</span>
          </div>
          
          <div className="timeline-path">
            <span className="path-text">{t.timeline.path1}</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>

          {/* Étape 2 */}
          <div className="timeline-step">
            <div className="step-icon"><i className="ri-database-2-fill"></i></div>
            <span className="step-text">{t.timeline.step2}</span>
          </div>

          <div className="timeline-path">
            <span className="path-text">{t.timeline.path2}</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>

          {/* Étape 3 */}
          <div className="timeline-step">
            <div className="step-icon"><i className="ri-bar-chart-box-fill"></i></div>
            <span className="step-text">{t.timeline.step3}</span>
          </div>

          <div className="timeline-path">
            <span className="path-text">{t.timeline.path3}</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>

          {/* Étape 4 (Objectif Final) */}
          <div className="timeline-step highlight-step">
            <div className="step-icon"><i className="ri-rocket-2-fill"></i></div>
            <span className="step-text">{t.timeline.step4}</span>
          </div>
        </div>
        {/* --- FIN DE LA TIMELINE --- */}

        <div className="social">
          <a href="https://www.facebook.com/mariama.fofana.771282/" target="_blank" rel="noreferrer">
            <i className="ri-facebook-circle-line"></i>
          </a>
          <a href="https://www.instagram.com/mariama_at_fofana/" target="_blank" rel="noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            <i className="ri-whatsapp-line"></i>
          </a>  
          <a href="https://www.linkedin.com/in/m-fofana/" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-box-line"></i>
          </a>
        </div>
      </div>
      
      {/* COLONNE DROITE : IMAGE */}
      <div className="home-img">
        <img src={heroImg} alt="Mariama Fofana" className="image" />
      </div>
    </section>
  );
};

export default Header;