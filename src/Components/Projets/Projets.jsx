import React from 'react';
import './Projets.css';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "Cloud Healthcare Unit – Data Warehouse & ETL",
    description: "Conception d'un système décisionnel hospitalier : modélisation dimensionnelle, pipelines ETL sous Talend et intégration de données hétérogènes (PostgreSQL, fichiers CSV, FTP).",
    technologies: ["Talend", "PostgreSQL", "Data Warehouse", "ETL", "Modélisation"],
    href: "https://github.com/MariamaFofana" 
  },
  {
    num: "02",
    title: "CHU Analytics – Business Intelligence & Power BI",
    description: "Création de tableaux de bord décisionnels pour le suivi des taux d'hospitalisation, de consultation, de mortalité et de satisfaction patient.",
    technologies: ["Power BI", "Data Visualization", "DAX", "Reporting"],
    href: "https://github.com/MariamaFofana"
  },
  {
    num: "03",
    title: "EasySave – Logiciel de Sauvegarde multi-versions",
    description: "Développement en équipe de logiciels de sauvegarde (versions console .Net et graphique WPF) avec gestion de files d'attente, chiffrement CryptoSoft et centralisation Docker.",
    technologies: ["C#", ".Net 8.0", "WPF", "Docker", "Architecture MVC/MVVM"],
    href: "https://github.com/MariamaFofana"
  },
  {
    num: "04",
    title: "GreenReso – Infrastructure SI & Cybersécurité",
    description: "Conception d'une architecture réseau sécurisée, modélisation Active Directory, gestion des droits NTFS par scripts PowerShell et stratégie de sensibilisation aux risques.",
    technologies: ["Active Directory", "PowerShell", "Réseau", "Cybersécurité", "GPO"],
    href: "https://github.com/MariamaFofana"
  },
  {
    num: "05",
    title: "PAD – Analyse Prédictive & Exploration de Données",
    description: "Projet d’analyse exploratoire de données (EDA), data cleaning et modélisation statistique sur le dataset Titanic.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    href: "https://github.com/MariamaFofana/PAD"
  },
  {
    num: "06",
    title: "Mon Portfolio – React.js & UI/UX",
    description: "Portfolio personnel interactif et responsive pour valoriser mon parcours d'ingénieure, mes compétences techniques et mes valeurs.",
    technologies: ["React.js", "CSS3", "JavaScript", "Framer Motion"],
    href: "https://github.com/MariamaFofana/MonPortofolio"
  }
];

const Projets = () => {
  return (
    <section className="projets-section" id="projets">
      <div className="containers">
        <div className="projets-heading-container">
          <h2 className="heading">Mes <span>Projets</span></h2>
          <p className="projets-subtitle">Un aperçu de mes réalisations académiques et techniques</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" } }}
          className="projets-grid"
        >
          {services.map((service, index) => (
            <div key={index} className="projet-card">
              <div className="projet-header">
                <div className="projet-num">{service.num}</div>
                {/* Utilisation de <a> avec target="_blank" pour les liens externes GitHub */}
                <a href={service.href} target="_blank" rel="noopener noreferrer" className="projet-link">
                  <i className="ri-github-fill"></i>
                </a>
              </div>
              
              <h3 className="projet-title">{service.title}</h3>
              <p className="projet-description">{service.description}</p>
              
              {/* Affichage des technologies sous forme de badges */}
              <div className="projet-tags">
                {service.technologies.map((tech, i) => (
                  <span key={i} className="projet-tag">{tech}</span>
                ))}
              </div>

              <div className="projet-divider"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projets;