import React from "react";
import heroImg from "../../IMAGES/Photo1.jpg";
import "../Header/Header.css";

const Header = () => {
  return (
    <section className="home" id="home">
      {/* COLONNE GAUCHE : TEXTE & TIMELINE */}
      <div className="home-content">
        <span className="text-dark">Turning Data into Meaningful Solutions.</span>
        <h3>Bonjour, je suis</h3>
        <h1>Mariama Fofana</h1>
        <h3>
          Étudiante en <span>Ingénierie Informatique</span> <br />
          spécialisée en <span>Data Science & Intelligence Artificielle</span>
        </h3>
        <p>
          Passionnée par les données et les technologies, je conçois des solutions alliant ingénierie logicielle et analyse de données. Mon objectif : transformer la donnée brute en décisions stratégiques.
          <br /><br />
          Ce portfolio est un espace où je partage mes réalisations et mes compétences. Il reflète mon parcours, mes projets techniques, ainsi que les passions qui m'animent au quotidien.
        </p>      
        {/* --- DÉBUT DE LA TIMELINE DE CARRIÈRE --- */}
        <div className="career-timeline">
          {/* Étape 1 */}
          <div className="timeline-step">
            <div className="step-icon"><i className="ri-graduation-cap-fill"></i></div>
            <span className="step-text">Sortie d'école</span>
          </div>
          
          <div className="timeline-path">
            <span className="path-text">Fondations</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>

          {/* Étape 2 */}
          <div className="timeline-step">
            <div className="step-icon"><i className="ri-database-2-fill"></i></div>
            <span className="step-text">Data Engineer</span>
          </div>

          <div className="timeline-path">
            <span className="path-text">Vision Métier</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>

          {/* Étape 3 */}
          <div className="timeline-step">
            <div className="step-icon"><i className="ri-bar-chart-box-fill"></i></div>
            <span className="step-text">Data Analyst</span>
          </div>

          <div className="timeline-path">
            <span className="path-text">Stratégie & Impact</span>
            <i className="ri-arrow-right-s-line"></i>
          </div>

          {/* Étape 4 (Objectif Final) */}
          <div className="timeline-step highlight-step">
            <div className="step-icon"><i className="ri-rocket-2-fill"></i></div>
            <span className="step-text">Leader Consulting Data</span>
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