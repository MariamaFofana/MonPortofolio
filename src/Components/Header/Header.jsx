import React from "react";
import heroImg from "../../IMAGES/Photo1.jpg";
import cv from "../../FICHIER/MariamaFofanaCV.pdf";
import "../Header/Header.css";
const Header = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Bonjour,</h3>
        <h1>Mariama Fofana</h1>
        <h3>
          Je suis une étudiante en{" "} <br />
          <span>Ingénierie Informatique - Data Science & IA</span>
        </h3>
        <p>
          Ce portfolio présente mon parcours scolaire et professionnel, mes
          projets en analyse de données, intelligence artificielle et
          développement logiciel.
          <br />
          C'est également un espace où je partage mes réalisations, mes
          compétences, ainsi que mes centres d’intérêt et passions.
        </p>
        <div className="social">
          <a href="https://www.facebook.com/mariama.fofana.771282/">
            <i className="ri-facebook-circle-line"></i>
          </a>
          <a href="https://www.instagram.com/mariama_at_fofana/">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="ri-twitter-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/m-fofana/">
            <i className="ri-linkedin-box-line"></i>
          </a>
        </div>
        <a href={cv} download="Mon_CV.pdf">
          <button className="download-btn">Télécharger mon CV</button>
        </a>
      </div>
      <div className="home-img">
        <img src={heroImg} alt="Photo de Fofana" className="image" />
      </div>
    </section>
  );
};

export default Header;
