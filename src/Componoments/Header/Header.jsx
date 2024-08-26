import React from "react";
import heroImg from "../../IMAGES/Photo1.jpg";
import cv from "../../FICHIER/Cv ALternance lyon_compressed.pdf";
import "../Header/Header.css"
const Header = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Bonjour,</h3>
        <h1>Fofana</h1>
        <h3>Je suis une étudiante en <span>Genie Logiciel</span></h3>
        <p> Ce portfolio présente une description de mon parcours scolaire et professionnel. <br />
        C'est aussi un espace où je partage qui je suis, mes loisirs, hobbies, échecs et réussites.</p>
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
