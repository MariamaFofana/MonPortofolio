import React from "react";
import heroImg from "../../IMAGES/photo3.jpg";
import "../About/About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-img">
        <div className="image-container">
          <img src={heroImg} alt="Portrait de Mariama Fofana" className="image" />
          
          {/* L'overlay qui apparaît au survol */}
          <div className="overlay">
            <ul className="overlay-values">
              <li>La Foi</li>
              <li>Le Travail</li>
              <li>La Loyauté</li>
              <li>Le Respect</li>
              <li>La Propreté</li>
            </ul>
          </div>
          
        </div>
      </div>
      
      <div className="about-content">
        <h2 className="heading">
          À propos de <span>Moi</span>
        </h2>
        
        <h3>
          Au-delà du code...
        </h3>
        
        <p>
          Si mon profil technique est orienté vers l'IA et la Data, mon parcours, lui, est avant tout une histoire de curiosité. D'un baccalauréat en mathématiques à un BTS en domotique, jusqu'à mon cycle d'ingénieur actuel à CESI Lyon, j'ai toujours été fascinée par la logique et la façon dont la technologie simplifie notre quotidien.
        </p>
        
       <p>
          Mais derrière l'écran, mon parcours est avant tout tourné vers l'humain, l'entraide et le service. J'ai eu l'opportunité de développer mon sens de l'écoute et mon empathie à travers diverses expériences fortes : de mon travail en tant que réceptionniste en hôtellerie à l'accompagnement de personnes en situation de handicap en France.
        </p>
        
        <p>
          Mon ouverture à la richesse interculturelle s'est également forgée sur le terrain en Tunisie, que ce soit par mon engagement associatif auprès de populations migrantes ou dans l'organisation d'événements étudiants. Toutes ces expériences de vie m'ont appris à m'adapter à n'importe quel environnement et ont profondément façonné mon leadership.
        </p>
        
        <p>
          Que ce soit dans mon quotidien personnel ou dans ma vie professionnelle, je m'appuie sur cinq piliers qui forgent mon identité et guident mes actions :
        <br/><br/>
          <em>✨ Passez la souris sur ma photo pour les découvrir !</em>
        </p>
        
        <p>
          Pour équilibrer ce quotidien rythmé, je me ressource à travers la musique, la cuisine et le sport, des passions qui m'aident à cultiver ma créativité et ma vitalité.
        </p>

        <a href="#CVitae" className="btnAbout">
          Découvrir mon parcours
        </a>
      </div>
    </div>
  );
};

export default About;