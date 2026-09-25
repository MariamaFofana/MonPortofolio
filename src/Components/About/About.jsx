import React from "react";
import heroImg from "../../IMAGES/photo3.jpg";
import "../About/About.css";
import { translations } from "../Translations/translations"; 
const About = ({ lang = "fr" }) => {
  const t = translations[lang].aboutSection;

  return (
    <div className="about">
      {/* COLONNE GAUCHE : PHOTO & OVERLAY DES VALEURS */}
      <div className="about-img">
        <div className="image-container">
          <img src={heroImg} alt="Portrait de Mariama Fofana" className="image" />
          
          {/* L'overlay qui apparaît au survol */}
          <div className="overlay">
            <ul className="overlay-values">
              {t.values.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* COLONNE DROITE : HISTOIRE & VALEURS */}
      <div className="about-content">
        <h2 className="heading">
          {t.heading}<span>{t.headingSpan}</span>
        </h2>
        
        <h3>
          {t.subheading}
        </h3>
        
        <p>{t.p1}</p>
        <p>{t.p2}</p>
        <p>{t.p3}</p>
        
        <p>
          {t.p4Text}
          <br/><br/>
          <em>{t.p4Hover}</em>
        </p>
        <a href="#CVitae" className="btnAbout">
          {t.btnText}
        </a>
      </div>
    </div>
  );
};

export default About;