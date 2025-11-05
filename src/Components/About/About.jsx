import React from "react";
import heroImg from "../../IMAGES/photo3.jpg";
import "../About/About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <div className="image-container">
          <img src={heroImg} alt="Photo de Fofana" className="image" />
        </div>
      </div>
      <div className="about-content">
        <h2 className="heading">
          À propos de <span>Moi</span>
        </h2>
        <h3>
          Étudiante en 3ᵉ année d’Ingénierie Informatique - Data Science & IA
        </h3>
        <p>
          Je suis Mariama Fofana, passionnée par l’analyse de données, le
          machine learning et le développement logiciel. Mon objectif est de
          transformer des idées en solutions concrètes et utiles.
        </p>
        <p>
          Mon parcours a commencé avec un baccalauréat en mathématiques, suivi
          d’un BTS en domotique. Je poursuis actuellement mes études en
          ingénierie informatique à CESI Lyon, spécialisée en Data Science &
          Intelligence Artificielle.
        </p>
        <p>
          J’aime voir mes projets prendre vie à travers le développement
          d’applications et la mise en place de solutions innovantes. Je suis
          également active dans des projets associatifs et entrepreneuriaux, ce
          qui me permet de développer mes compétences en organisation et
          communication.
        </p>
        <p>
          Je suis fière des projets académiques et des défis que j’ai relevés,
          et je continue à travailler avec rigueur, curiosité et détermination
          pour atteindre mes objectifs. Mes valeurs incluent l’autonomie, le
          respect et le sens du détail.
        </p>
        <p>
          En dehors du développement, j’apprécie écouter de la musique, cuisiner
          et pratiquer des activités sportives pour garder un équilibre.
        </p>

        <a href="#CVitae" className="btnAbout">
          En savoir plus
        </a>
      </div>
    </div>
  );
};

export default About;
