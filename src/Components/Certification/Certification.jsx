import React, { useState } from "react";
import "./Certification.css"; 
import { certificationsData, categories } from "./certifsData";

const Certifications = ({ lang = "fr" }) => {
  // Textes fixes de l'interface traduits
  const uiTexts = {
    fr: {
      titleMain: "Mes ",
      titleHighlight: "certifications",
      subtitle: "Des formations, des validations et des badges qui témoignent de mon engagement à apprendre et à me perfectionner.",
      allCategory: "Toutes",
      issuedBy: "Délivré par : ",
      viewCert: "Voir le certificat",
      modalTitle: "Agrandir le certificat",
      modalNotAvailable: "Scan/Image bientôt disponible",
      modalIssued: "Délivré par ",
      stats: [
        { title: "3+", desc: "Certifications & Badges" },
        { title: "International", desc: "Expérience & Formations" },
        { title: "Ingénierie", desc: "Data Science & IA" },
        { title: "100%", desc: "Motivée & Engagée" }
      ]
    },
    en: {
      titleMain: "My ",
      titleHighlight: "certifications",
      subtitle: "Trainings, validations, and badges that reflect my commitment to learning and improving.",
      allCategory: "All",
      issuedBy: "Issued by: ",
      viewCert: "View certificate",
      modalTitle: "Enlarge certificate",
      modalNotAvailable: "Scan/Image coming soon",
      modalIssued: "Issued by ",
      stats: [
        { title: "3+", desc: "Certifications & Badges" },
        { title: "International", desc: "Experience & Training" },
        { title: "Engineering", desc: "Data Science & AI" },
        { title: "100%", desc: "Motivated & Committed" }
      ]
    }
  };

  const t = uiTexts[lang];
  const currentCategories = categories[lang] || categories.fr;
  const currentCertifs = certificationsData[lang] || certificationsData.fr;

  const [activeCategory, setActiveCategory] = useState(currentCategories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertif, setSelectedCertif] = useState(null);

  const filteredCertifs = activeCategory === currentCategories[0]
    ? currentCertifs
    : currentCertifs.filter(item => item.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= filteredCertifs.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, filteredCertifs.length - 3) : prevIndex - 1
    );
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <section className="certifications-section" id="certifications">
      
      {/* HEADER */}
      <div className="certifs-header">
        <div className="certifs-badge">
          <i className="ri-award-line"></i>
        </div>
        <h2 className="certifs-title">
          {t.titleMain}<span className="highlight-text">{t.titleHighlight}</span>
        </h2>
        <p className="certifs-subtitle">
          {t.subtitle}
        </p>
      </div>

      {/* FILTRES */}
      <div className="certifs-filters">
        {currentCategories.map((cat, index) => (
          <button
            key={index}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CARROUSEL */}
      <div className="certifs-carousel-container">
        <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Précédent">
          <i className="ri-arrow-left-s-line"></i>
        </button>

        <div className="certifs-carousel-track-wrapper">
          <div 
            className="certifs-carousel-track"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {filteredCertifs.map((cert) => (
              <div className="certif-card" key={cert.id}>
                <div className="certif-card-top">
                  <div className="issuer-icon">
                    <i className="ri-shield-check-line"></i>
                  </div>
                  <button 
                    className="external-link-btn" 
                    onClick={() => setSelectedCertif(cert)}
                    title={t.modalTitle}
                  >
                    <i className="ri-zoom-in-line"></i>
                  </button>
                </div>

                <div className="certif-content">
                  <span className="certif-date"><i className="ri-calendar-line"></i> {cert.date}</span>
                  <h3 className="certif-name">{cert.title}</h3>
                  <p className="certif-issuer">{t.issuedBy}<strong>{cert.issuer}</strong></p>
                  <p className="certif-desc">{cert.description}</p>
                </div>

                <div className="certif-skills">
                  {cert.skills.map((skill, i) => (
                    <span className="skill-tag" key={i}>{skill}</span>
                  ))}
                </div>

                <div className="certif-footer-card">
                  <button className="view-cert-link" onClick={() => setSelectedCertif(cert)}>
                    {t.viewCert} <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-arrow next" onClick={nextSlide} aria-label="Suivant">
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>

      {/* MODALE (POPUP PHOTO) */}
      {selectedCertif && (
        <div className="certif-modal-overlay" onClick={() => setSelectedCertif(null)}>
          <div className="certif-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedCertif(null)} aria-label="Fermer">
              <i className="ri-close-line"></i>
            </button>
            <h3 className="modal-title">{selectedCertif.title}</h3>
            <div className="modal-img-container">
              {selectedCertif.image ? (
                <img src={selectedCertif.image} alt={selectedCertif.title} />
              ) : (
                <p style={{ padding: "40px", color: "#666" }}>{t.modalNotAvailable}</p>
              )}
            </div>
            <p className="modal-issuer">{t.modalIssued}<strong>{selectedCertif.issuer}</strong> ({selectedCertif.date})</p>
          </div>
        </div>
      )}

      {/* STATISTIQUES */}
      <div className="certifs-stats-banner">
        <div className="stat-item">
          <i className="ri-medal-fill"></i>
          <div>
            <h4>{t.stats[0].title}</h4>
            <p>{t.stats[0].desc}</p>
          </div>
        </div>
        <div className="stat-item">
          <i className="ri-global-line"></i>
          <div>
            <h4>{t.stats[1].title}</h4>
            <p>{t.stats[1].desc}</p>
          </div>
        </div>
        <div className="stat-item">
          <i className="ri-book-open-line"></i>
          <div>
            <h4>{t.stats[2].title}</h4>
            <p>{t.stats[2].desc}</p>
          </div>
        </div>
        <div className="stat-item">
          <i className="ri-rocket-line"></i>
          <div>
            <h4>{t.stats[3].title}</h4>
            <p>{t.stats[3].desc}</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Certifications;