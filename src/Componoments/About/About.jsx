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
        <h3>Ingénieur Logiciel</h3>
        <p>
          Je suis Fofana Mariama, ingénieur logiciel passionné, avec une expertise en développement logiciel, gestion de projets, et design UX/UI.
        </p>
        <p>
          Mon parcours commence avec un baccalauréat en mathématiques et un BTS en domotique, et je poursuis actuellement une formation en ingénierie informatique.
        </p>
        <p>
          J’aime voir mes idées prendre vie à travers le frontend design de sites et d’applications. Actif dans les associations, je m'investis dans l'organisation et la communication.
        </p>
        <p>
          Je suis fier des projets scolaires et des défis que j’ai relevés, et je continue de me battre pour atteindre mes objectifs. Mes valeurs incluent le respect des autres et le bon raisonnement, et j’aborde chaque défi avec résilience et détermination.
        </p>
        <p>
          J’apprécie écouter de la musique, cuisiner, et aller à la salle de sport.
        </p>
        <a href="#CVitae" className="btnAbout">
          En savoir plus
        </a>
       
      </div>
    </div>
  );
};

export default About;
