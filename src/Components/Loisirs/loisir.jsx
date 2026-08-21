import React, { useState } from "react";
import "./loisir.css";

const Loisirs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="loisirs-section-complete" id="loisirs">
      
      {/* 1. PARTIE HAUT : Icône cœur en grand, puis badge LOISIRS et Titre */}
      <div className="loisirs-header-top">
        <div className="loisirs-heart-icon-wrapper">
          <i className="ri-heart-3-fill"></i>
        </div>
        <div className="loisirs-badge">
          <span>LOISIRS</span>
        </div>
        <h2 className="loisirs-title-main">
          Mon <span className="highlight-text">équilibre</span> au quotidien
        </h2>
        <p className="loisirs-subtitle-main">
          Chaque activité a sa place dans mon quotidien et contribue à qui je deviens.
        </p>
      </div>

      {/* 2. PARTIE MILIEU (En attente) */}

      {/* 3. PARTIE BAS : Citation d'équilibre */}
      <div className="loisirs-footer-bottom">
        <div className="quote-container-bottom">
          <i className="ri-double-quotes-l quote-icon-left"></i>
          <p>L'équilibre n'est pas une destination, c'est une façon d'avancer.</p>
          <i className="ri-double-quotes-r quote-icon-right"></i>
        </div>
      </div>

    </section>
  );
};

export default Loisirs;