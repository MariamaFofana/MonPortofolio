import React, { useState } from "react";
import "./Projets.css";
import { projetsData } from "./projetsData";
import { motion, AnimatePresence } from "framer-motion";

const Projets = ({ lang = "fr" }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Textes fixes de l'interface traduits
  const uiTexts = {
    fr: {
      badge: "PORTFOLIO TECHNIQUE",
      titleMain: "Mes ",
      titleSpan: "Projets",
      subtitle: "Un aperçu de mes réalisations en Ingénierie Data, IA et Systèmes",
      detailsBtn: "En savoir plus",
      githubBtn: "GitHub",
      modalContext: "💡 Contexte & Problématique",
      modalSolution: "🛠 Solution & Architecture",
      modalFeatures: "🎯 Réalisations & Fonctionnalités clés",
      modalResults: "📊 Résultats",
      modalLink: "Voir le projet sur GitHub",
      closeLabel: "Fermer"
    },
    en: {
      badge: "TECHNICAL PORTFOLIO",
      titleMain: "My ",
      titleSpan: "Projects",
      subtitle: "An overview of my achievements in Data Engineering, AI, and Systems",
      detailsBtn: "Learn more",
      githubBtn: "GitHub",
      modalContext: "💡 Context & Problem",
      modalSolution: "🛠 Solution & Architecture",
      modalFeatures: "🎯 Key Features & Achievements",
      modalResults: "📊 Results",
      modalLink: "View project on GitHub",
      closeLabel: "Close"
    }
  };

  const t = uiTexts[lang];
  const currentProjects = projetsData[lang] || projetsData.fr;

  // Configuration : 3 projets par page
  const itemsPerPage = 3;
  const totalPages = Math.ceil(currentProjects.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const pageProjects = currentProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="projets-section" id="projets">
      <div className="containers">
        
        {/* HEADER */}
        <div className="projets-heading-container">
          <div className="projets-badge">
            <i className="ri-code-box-line"></i>
            <span>{t.badge}</span>
          </div>
          <h2 className="heading">{t.titleMain}<span>{t.titleSpan}</span></h2>
          <p className="projets-subtitle">{t.subtitle}</p>
        </div>

        {/* GRILLE DES 3 PROJETS DE LA PAGE ACTIVE */}
        <motion.div 
          key={currentPage + lang}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="projets-grid-page"
        >
          {pageProjects.map((proj, idx) => (
            <div key={idx} className="projet-card-item">
              <div className="projet-top-row">
                <span className="projet-num-badge">{proj.num}</span>
                <span className="projet-category">{proj.category}</span>
              </div>

              <h3 className="projet-title">{proj.title}</h3>
              <p className="projet-description">{proj.shortDesc}</p>

              <div className="projet-tags">
                {proj.technologies.slice(0, 4).map((tech, i) => (
                  <span key={i} className="projet-tag">{tech}</span>
                ))}
                {proj.technologies.length > 4 && <span className="projet-tag">+{proj.technologies.length - 4}</span>}
              </div>

              <div className="projet-card-actions">
                <button className="btn-details" onClick={() => setSelectedProject(proj)}>
                  {t.detailsBtn} <i className="ri-arrow-right-line"></i>
                </button>
                <a href={proj.href} target="_blank" rel="noopener noreferrer" className="btn-github-link">
                  <i className="ri-github-fill"></i> {t.githubBtn}
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* PAGINATION NUMÉROTÉE */}
        <div className="projets-number-pagination">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              className={`pagination-num ${currentPage === idx ? "active" : ""}`}
              onClick={() => setCurrentPage(idx)}
            >
              0{idx + 1}
            </button>
          ))}
        </div>

      </div>

      {/* ================= MODALE DE DÉTAIL DU PROJET ================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="projet-modal-overlay" onClick={() => setSelectedProject(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="projet-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label={t.closeLabel}>
                <i className="ri-close-line"></i>
              </button>

              <span className="modal-category">{selectedProject.category}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>

              {/* MÉTADONNÉES */}
              <div className="modal-meta-bar">
                <span><i className="ri-calendar-line"></i> {selectedProject.year}</span>
                <span>•</span>
                <span><i className="ri-book-open-line"></i> {selectedProject.type}</span>
                <span>•</span>
                <span><i className="ri-time-line"></i> {selectedProject.duration}</span>
              </div>

              {/* IMAGE DU PROJET */}
              {selectedProject.image && (
                <div className="modal-image-container">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
              )}

              {/* CONTEXTE & PROBLÉMATIQUE */}
              <div className="modal-section-block">
                <h4>{t.modalContext}</h4>
                <p>{selectedProject.context}</p>
              </div>

              {/* SOLUTION & ARCHITECTURE */}
              <div className="modal-section-block">
                <h4>{t.modalSolution}</h4>
                <div className="architecture-flow-box">
                  {selectedProject.solution}
                </div>
              </div>

              {/* FONCTIONNALITÉS */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="modal-section-block">
                  <h4>{t.modalFeatures}</h4>
                  <ul className="modal-features-list">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i}><i className="ri-check-line"></i> {feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* RÉSULTATS */}
              <div className="modal-section-block">
                <h4>{t.modalResults}</h4>
                <p>{selectedProject.results}</p>
              </div>

              {/* TECHNOLOGIES */}
              <div className="modal-tech-list">
                {selectedProject.technologies.map((tech, i) => (
                  <span key={i} className="modal-tag">{tech}</span>
                ))}
              </div>

              {/* BOUTON GITHUB */}
              <div className="modal-actions">
                <a href={selectedProject.href} target="_blank" rel="noopener noreferrer" className="modal-github-btn">
                  {t.modalLink} <i className="ri-external-link-line"></i>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projets;