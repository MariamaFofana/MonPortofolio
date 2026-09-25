import React, { useState } from "react";
import "./CVitae.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { experience, education, association, skills, about } from "./CVitaedata";

const CVitae = ({ lang = "fr" }) => {
  // Sélection des données selon la langue active
  const currentExp = experience[lang] || experience.fr;
  const currentEdu = education[lang] || education.fr;
  const currentSkills = skills[lang] || skills.fr;
  const currentAsso = association[lang] || association.fr;
  const currentAbout = about[lang] || about.fr;

  // Textes fixes de l'interface traduits
  const uiTexts = {
    fr: {
      tabs: {
        exp: "Expériences",
        edu: "Formations",
        skills: "Compétences",
        asso: "Associations",
        about: "Profil & Coordonnées"
      },
      expStats: {
        total: "Expériences & Stages",
        stages: "Stages techniques",
        jobs: "Emplois"
      },
      badgeStage: "Stage",
      badgePro: "Professionnel",
      missionsTitle: "Missions principales :",
      eduObjective: "MON OBJECTIF",
      eduStats: [
        { count: "4", text: "Établissements" },
        { count: "+ 8 ans", text: "de formation" },
        { count: "1 objectif", text: "clair et ambitieux" },
        { highlight: "En constante", bold: "évolution" }
      ],
      assoBtn: "Voir toutes mes attestations & certificats",
      modalTitle: "Attestations & Certificats",
      modalSub: "Retrouvez ici l'ensemble de mes documents et justificatifs officiels.",
      aboutBtn: "Discutons d'une opportunité"
    },
    en: {
      tabs: {
        exp: "Experiences",
        edu: "Education",
        skills: "Skills",
        asso: "Associations",
        about: "Profile & Contact"
      },
      expStats: {
        total: "Experiences & Internships",
        stages: "Technical internships",
        jobs: "Jobs"
      },
      badgeStage: "Internship",
      badgePro: "Professional",
      missionsTitle: "Key missions:",
      eduObjective: "MY GOAL",
      eduStats: [
        { count: "4", text: "Institutions" },
        { count: "+ 8 yrs", text: "of training" },
        { count: "1 goal", text: "clear and ambitious" },
        { highlight: "Constantly", bold: "evolving" }
      ],
      assoBtn: "View all my certificates & documents",
      modalTitle: "Certificates & Documents",
      modalSub: "Find all my official documents and certificates here.",
      aboutBtn: "Let's discuss an opportunity"
    }
  };

  const t = uiTexts[lang];

  // Calcul dynamique des statistiques d'expériences
  const totalExp = currentExp.items.length;
  const totalStages = currentExp.items.filter(
    (item) =>
      item.position.toLowerCase().includes("stagiaire") ||
      item.position.toLowerCase().includes("stage") ||
      item.position.toLowerCase().includes("intern")
  ).length;
  const totalEmplois = totalExp - totalStages;

  const formatNum = (num) => (num < 10 ? `0${num}` : num);

  const [showCertificatesModal, setShowCertificatesModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="container-wrapper"
      id="CVitae"
    >
      <div className="container">
        <Tabs defaultValue="experience" className="tabs-container">
          <TabsList className="tabs-list">
            <TabsTrigger value="experience">{t.tabs.exp}</TabsTrigger>
            <TabsTrigger value="education">{t.tabs.edu}</TabsTrigger>
            <TabsTrigger value="skills">{t.tabs.skills}</TabsTrigger>
            <TabsTrigger value="association">{t.tabs.asso}</TabsTrigger>
            <TabsTrigger value="about">{t.tabs.about}</TabsTrigger>
          </TabsList>

          <div className="content-container">
           {/* ================= EXPÉRIENCES ================= */}
           <TabsContent value="experience" className="tabs-content">
             <div className="experience-container">
               
               {/* En-tête */}
               <div className="experience-header-center">
                 <h3 className="experience-title-main">
                   {currentExp.title.split(",")[0]}, <span className="highlight-text">{currentExp.title.split(",")[1] || "votre valeur"}</span>
                 </h3>
                 <p className="experience-description">
                   {currentExp.description}
                 </p>
               </div>

               {/* Layout principal : Stats à gauche + Timeline scrollable à droite */}
               <div className="experience-main-layout">
                 
                 {/* 1. Panneau latéral gauche (Statistiques dynamiques) */}
                 <div className="experience-stats-panel">
                   <div className="exp-panel-icon"><i className="ri-briefcase-line"></i></div>
                   
                   <div className="exp-stat-block">
                     <h4>{formatNum(totalExp)}</h4>
                     <p>{t.expStats.total}</p>
                   </div>
                   <div className="exp-divider"></div>
                   <div className="exp-stat-block">
                     <h4>{formatNum(totalStages)}</h4>
                     <p>{t.expStats.stages}</p>
                   </div>
                   <div className="exp-divider"></div>
                   <div className="exp-stat-block">
                     <h4>{formatNum(totalEmplois)}</h4>
                     <p>{t.expStats.jobs}</p>
                   </div>
                 </div>

                 {/* 2. Timeline avec Scrollbar */}
                 <div className="exp-timeline-wrapper">
                   <ul className="experience-timeline-list">
                     {currentExp.items.map((item, index) => (
                       <li key={index} className="experience-timeline-item">
                         <div className="exp-date-box">
                           <span className="timeline-date">{item.duration}</span>
                           <span className="timeline-badge-type">
                             {item.position.toLowerCase().includes("stage") || item.position.toLowerCase().includes("intern") ? t.badgeStage : t.badgePro}
                           </span>
                         </div>
                         
                         <div className="timeline-dot"></div>
                         
                         <div className="timeline-card">
                           <div className="timeline-card-header">
                             <div>
                               <h4 className="timeline-position">{item.position}</h4>
                               <p className="timeline-company">{item.company}</p>
                             </div>
                             {item.location && (
                               <span className="timeline-location">
                                 <i className="ri-map-pin-line"></i> {item.location}
                               </span>
                             )}
                           </div>

                           {item.description && (
                             <p className="timeline-desc">{item.description}</p>
                           )}

                           {/* Affichage des missions si elles sont définies dans la data */}
                           {item.missions && item.missions.length > 0 && (
                             <div className="timeline-missions-block">
                               <span className="missions-title">{t.missionsTitle}</span>
                               <ul className="missions-list">
                                 {item.missions.map((mission, idx) => (
                                   <li key={idx}>
                                     <i className="ri-checkbox-circle-line"></i> {mission}
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           )}
                         </div>
                       </li>
                     ))}
                   </ul>
                 </div>

               </div>
             </div>
           </TabsContent>

            {/* ================= FORMATIONS ================= */}
            <TabsContent value="education" className="tabs-content">
              <div className="education-container">
                
                {/* En-tête */}
                <div className="education-header-center">
                  <h3 className="education-title">
                    {currentEdu.title.includes("parcours") ? "Mon parcours " : "My academic "}
                    <span className="highlight-text">{currentEdu.title.includes("parcours") ? "académique" : "background"}</span>
                  </h3>
                  <p className="education-description">
                    {currentEdu.description}
                  </p>
                </div>

                {/* Layout en 2 colonnes (Timeline + Objectif 1/3) */}
                <div className="education-main-layout">
                  
                  {/* 1. Colonne Timeline avec Scrollbar */}
                  <div className="timeline-wrapper">
                    <ul className="education-timeline-list">
                      {currentEdu.items.map((item, index) => (
                        <li key={index} className="education-timeline-item">
                          <span className="timeline-date">{item.duration}</span>
                          <div className="timeline-dot"></div>
                          <div className="timeline-card">
                            
                            {/* Grand logo ou icône */}
                            <div className="timeline-logo-container">
                              {item.image ? (
                                <img src={item.image} alt={item.ecole} />
                              ) : (
                                <i className="ri-building-4-line"></i>
                              )}
                            </div>

                            <div className="timeline-card-content">
                              <h4 className="timeline-diplome">{item.diplome}</h4>
                              <p className="timeline-ecole">{item.ecole}</p>
                              <p className="timeline-spec">{item.specialite}</p>
                              
                              {/* Matières / Tags */}
                              {item.subjects && (
                                <div className="timeline-skills-tags">
                                  {item.subjects.map((sub, i) => (
                                    <span key={i} className="timeline-tag">{sub}</span>
                                  ))}
                                </div>
                              )}
                            </div>

                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 2. Colonne Droite : Bloc Objectif (1/3) */}
                  <div className="education-objective-panel">
                    <div className="objective-icon-top"><i className="ri-star-line"></i></div>
                    <h4>{t.eduObjective}</h4>
                    <div className="objective-steps">
                      <div className="objective-step-item">
                        <i className="ri-database-2-line"></i> Data Engineer
                      </div>
                      <div className="objective-arrow"><i className="ri-arrow-down-line"></i></div>
                      <div className="objective-step-item">
                        <i className="ri-bar-chart-box-line"></i> Data Analyst
                      </div>
                      <div className="objective-arrow"><i className="ri-arrow-down-line"></i></div>
                      <div className="objective-step-item">
                        <i className="ri-user-shared-line"></i> Data Consulting
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bandeau Statistiques Bas */}
                <div className="education-stats-banner">
                  <div className="edu-stat-item">
                    <i className="ri-graduation-cap-line"></i>
                    <div className="edu-stat-info">
                      <h4>{t.eduStats[0].count}</h4>
                      <p>{t.eduStats[0].text}</p>
                    </div>
                  </div>
                  <div className="edu-stat-item">
                    <i className="ri-calendar-event-line"></i>
                    <div className="edu-stat-info">
                      <h4>{t.eduStats[1].count}</h4>
                      <p>{t.eduStats[1].text}</p>
                    </div>
                  </div>
                  <div className="edu-stat-item">
                    <i className="ri-focus-3-line"></i>
                    <div className="edu-stat-info">
                      <h4>{t.eduStats[2].count}</h4>
                      <p>{t.eduStats[2].text}</p>
                    </div>
                  </div>
                  <div className="edu-stat-item">
                    <i className="ri-line-chart-line"></i>
                    <div className="edu-stat-info">
                      <p>{t.eduStats[3].highlight} <strong>{t.eduStats[3].bold}</strong></p>
                    </div>
                  </div>
                </div>

              </div>
            </TabsContent>

            {/* ================= ASSOCIATIONS ================= */}          
            <TabsContent value="association" className="tabs-content">
              <div className="association-container">
                
                {/* En-tête */}
                <div className="association-header-center">
                  <h3 className="association-title-main">
                    {lang === "fr" ? "Mes " : "My "}
                    <span className="highlight-text">{lang === "fr" ? "Associations " : "Associations "}</span>
                  </h3>
                  <p className="association-description">
                    {currentAsso.description}
                  </p>

                  {/* BOUTON GLOBAL POUR VOIR TOUTES LES ATTESTATIONS */}
                  <button 
                    className="global-certificates-btn" 
                    onClick={() => setShowCertificatesModal(true)}
                  >
                    <i className="ri-file-shield-2-line"></i> {t.assoBtn}
                  </button>
                </div>

                {/* Grille horizontale des associations */}
                <div className="association-carousel-wrapper">
                  <div className="association-grid-cards">
                    {currentAsso.items.map((item, index) => (
                      <div key={index} className="association-card">
                        <div className="asso-card-top">
                          <div className="asso-icon-circle">
                            <i className="ri-team-line"></i>
                          </div>
                          <h4 className="asso-org-name">{item.organization}</h4>
                          <span className="asso-role-badge">{item.position} ({item.role})</span>
                          <p className="asso-desc">{item.description}</p>
                        </div>
                        <div className="asso-middle-info">
                          <span className="asso-location"><i className="ri-map-pin-line"></i> {item.location}</span>
                        </div>
                        <div className="asso-date">
                          <i className="ri-calendar-line"></i> {item.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ================= MODALE / LISTE DES ATTESTATIONS ================= */}
                {showCertificatesModal && (
                  <div className="certif-modal-overlay" onClick={() => setShowCertificatesModal(false)}>
                    <div className="certif-modal-content" onClick={(e) => e.stopPropagation()}>
                      <button className="modal-close-btn" onClick={() => setShowCertificatesModal(false)}>
                        <i className="ri-close-line"></i>
                      </button>
                      
                      <h3 className="modal-title">{t.modalTitle}</h3>
                      <p className="modal-subtitle">{t.modalSub}</p>

                      <div className="certificates-list-grid">
                        <a href="/images/attestation1.pdf" target="_blank" rel="noopener noreferrer" className="certificate-item-link">
                          <i className="ri-file-pdf-line"></i>
                          <span>Attestation d'engagement - ARTICLE1</span>
                          <i className="ri-external-link-line"></i>
                        </a>
                        <a href="/images/attestation2.pdf" target="_blank" rel="noopener noreferrer" className="certificate-item-link">
                          <i className="ri-file-pdf-line"></i>
                          <span>Certificat de formation / Bénévolat</span>
                          <i className="ri-external-link-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </TabsContent>
            
            {/* ================= COMPÉTENCES ================= */}
            <TabsContent value="skills" className="tabs-content">
              <div className="skills-container">
                <h3 className="skills-title">{currentSkills.title}</h3>
                <p className="skills-description">{currentSkills.description}</p>

                {currentSkills.skillList.map((category, index) => (
                  <div key={index} className="skills-category-block">
                    <h4 className="skills-category">{category.categoryName}</h4>
                    <div className="skills-category-items">
                      {category.items.map((item, i) => (
                        <div key={i} className="skills-item">
                          {item.icon}
                          <p className="skills-name">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* ================= À PROPOS DE MOI / PROFIL ================= */}
            <TabsContent value="about" className="tabs-content">
              <div className="about-container">
                
                <div className="about-header-center">
                  <h3 className="about-title-main">
                    {lang === "fr" ? "Profil & " : "Profile & "}
                    <span className="highlight-text">{lang === "fr" ? "Coordonnées" : "Contact"}</span>
                  </h3>
                  <p className="about-description">
                    {currentAbout.description}
                  </p>
                </div>

                {/* Grille des informations personnelles */}
                <div className="about-grid-cards">
                  {currentAbout.info.map((item, index) => (
                    <div key={index} className="about-info-card">
                      <div className="about-card-icon">
                        <i className={item.icon || "ri-information-line"}></i>
                      </div>
                      <div className="about-card-content">
                        <span className="about-field-name">{item.fieldName}</span>
                        <span className="about-field-value">{item.fieldValue}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bouton de redirection vers la section Contact */}
                <div className="about-footer-action">
                  <a href="#Contact" className="contact-direct-btn">
                    <span>{t.aboutBtn}</span>
                    <i className="ri-send-plane-line"></i>
                  </a>
                </div>

              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default CVitae;