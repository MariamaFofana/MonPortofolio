import React from 'react';
import './Projets.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    num: "01",
    title: "WEB dev",
    description: "Ceci est une description du projet",
    href: '/projet-1'
  },
  {
    num: "02",
    title: "WEB dev",
    description: "Ceci est une description du projet",
    href: '/projet-2'
  },
  {
    num: "03",
    title: "WEB dev",
    description: "Ceci est une description du projet",
    href: '/projet-3'
  },
  {
    num: "04",
    title: "WEB dev",
    description: "Ceci est une description du projet",
    href: '/projet-4'
  },
  {
    num: "05",
    title: "WEB dev",
    description: "Ceci est une description du projet",
    href: '/projet-3'
  },
  {
    num: "06",
    title: "WEB dev",
    description: "Ceci est une description du projet",
    href: '/projet-4'
  },
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
                  <i className="ri-arrow-right-down-fill"></i>
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
