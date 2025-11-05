import React from 'react';
import './Projets.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "AirWatcher – Application React MVC",
    description: "Application de suivi de la qualité de l’air avec visualisation des données et statistiques.",
    technologies: "React.js, JavaScript, CSS, MVC, API capteurs",
    href: "https://github.com/Alexandre-69/Projet-UML-AirWatcher"
  },
  {
    num: "02",
    title: "Gestion de trajets – C++",
    description: "Gestion de trajets simples et composés, manipulation de listes chaînées et tests unitaires.",
    technologies: "C++, POO, listes chaînées",
    href: "https://github.com/LisaQuantin/CPP_TP4"
  },
  {
    num: "03",
    title: "Pierre-Feuille-Ciseau – HTML/CSS/JS",
    description: "Jeu interactif avec animations et interface utilisateur responsive.",
    technologies: "HTML, CSS, JavaScript",
    href: "https://github.com/MariamaFofana/PierreFeuilleCiseau"
  },
 {
  num: "04",
  title: "Algorithms and Combinatorial Optimization – Python",
  description: "Projets et exercices éducatifs en algorithmique et optimisation combinatoire, incluant la modélisation de problèmes, les méthodes exactes et les métaheuristiques.",
  technologies: "Python, Algorithmes, Optimisation, Recherche Opérationnelle",
  href: "https://github.com/MariamaFofana/Algorithms-and-Combinatorial-Optimization"
},
{
  num: "05",
  title: "PAD – Projet Analyse de Données",
  description: "Projet d’analyse de données sur le dataset Titanic, avec visualisation et exploration des données.",
  technologies: "Python, Pandas, NumPy, Matplotlib",
  href: "https://github.com/MariamaFofana/PAD"
},
  {
  num: "06",
  title: "Mon Portfolio – React.js",
  description: "Portfolio personnel construit en React.js pour présenter mes projets, compétences et parcours. Comprend sections About, Projets, CV, Contact et plus.",
  technologies: "React.js, HTML5, CSS3, JavaScript",
  href: "https://github.com/MariamaFofana/MonPortofolio"
}
];

const Projets = () => {
  return (
    <section className="projets-section">
      <div className="containers">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" } }}
          className="projets-grid"
        >
          
          {services.map((service, index) => (
            <div key={index} className="projet-card">
              <div className="projet-header">
                <div className="projet-num">{service.num}</div>
                <Link to={service.href} className="projet-link">
                  <i className="ri-links-line"></i> 
                </Link>
              </div>
              <h2 className="projet-title">{service.title}</h2>
              <p className="projet-description">{service.description}</p>
              <div className="projet-divider"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projets;
