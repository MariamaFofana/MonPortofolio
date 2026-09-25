import React, { useState } from "react";
import "./loisir.css";

// ===1. IMPORT DES PHOTOS
// Groupe 1 : Sport & Énergie
import Guineenne from "../../IMAGES/guineenene.jpg";
import merplage from "../../IMAGES/mer.jpeg";
import sport from "../../IMAGES/sport.jpg";

// Groupe 2 : Créativité
import music from "../../IMAGES/music.jpg";
import salif from "../../IMAGES/salif.jpg";
import cuisine from "../../IMAGES/cuisine.jpeg";

// Groupe 3 : Évasion & Voyages
import tunisie from "../../IMAGES/tunis.jpg";
import disney from "../../IMAGES/disney.jpeg";
import Lyon from "../../IMAGES/lyon.jpg";

// ===========2. GROUPES DE LOISIRS BILINGUES (FR / EN)
const loisirsData = {
  fr: {
    badge: "LOISIRS",
    titleMain: "Mon ",
    titleHighlight: "équilibre",
    titleEnd: " au quotidien",
    subtitle: "Chaque activité a sa place dans mon quotidien et contribue à qui je deviens.",
    quote: "L'équilibre n'est pas une destination, c'est une façon d'avancer.",
    groups: [
      {
        id: 0,
        tag: "ÉNERGIE & DÉPASSEMENT",
        title: "Sport & dépassement de soi",
        description:
          "Le sport m'apprend à être régulière et à repousser mes limites. Revenir à mes origines me permet de mieux surmonter les difficultés en me rappelant d'où je viens, et l'eau est mon élément : j'adore la plage et j'y passe une majeure partie de mon temps l'été.",
        anecdote: "💡 Le savais-tu ? J'ai des vidéos souvenirs faites lors de mon retour chez moi après 6 ans d'absence entre la Tunisie et la France. Je les regarde les soirs — celles de mon père, ma mère, ma tante et surtout de mes neveux — pour sourire et me ressourcer.",
        images: [Guineenne, sport, merplage],
        icons: ["ri-heart-pulse-line", "ri-dumbbell-line", "ri-medal-line"],
      },
      {
        id: 1,
        tag: "CRÉATIVITÉ & PASSION",
        title: "Musique & cuisine",
        description:
          "La musique m'accompagne au quotidien — j'en suis accro et je marche toujours avec mon casque pour m'évader, tandis que la cuisine me permet de créer, d'expérimenter et de partager de précieux moments.",
        anecdote: "💡 Ma recette secrète : un bon casque vissé sur les oreilles, un mix de musiques, et c'est parti pour marcher des kilomètres au bord des quais du Rhône à pied ! 🎧",
        images: [salif, music, cuisine],
        icons: ["ri-music-2-line", "ri-headphone-line", "ri-restaurant-line"],
      },
      {
        id: 2,
        tag: "VOYAGES & DÉCOUVERTE",
        title: "Voyages & nouveaux horizons",
        description:
          "Explorer de nouveaux horizons, de la Tunisie à Lyon en passant par des escapades magiques, me permet de découvrir d'autres cultures et de sortir constamment de ma zone de confort.",
        anecdote: "💡 D'accordo : En Tunisie, j'ai presque fait le tour du pays, et j'y ai même ma famille adoptive, la famille Slimen à Gafsa ❤️.",
        images: [tunisie, disney, Lyon],
        icons: ["ri-plane-line", "ri-earth-line", "ri-map-pin-line"],
      },
    ]
  },
  en: {
    badge: "HOBBIES",
    titleMain: "My daily ",
    titleHighlight: "balance",
    titleEnd: "",
    subtitle: "Every activity has its place in my daily life and contributes to who I am becoming.",
    quote: "Balance is not a destination, it's a way of moving forward.",
    groups: [
      {
        id: 0,
        tag: "ENERGY & SELF-DRIVE",
        title: "Sports & Self-Improvement",
        description:
          "Sports teach me consistency and pushing my limits. Returning to my roots helps me better overcome difficulties by reminding me where I come from, and water is my element: I love the beach and spend most of my time there in the summer.",
        anecdote: "💡 Did you know? I have souvenir videos made during my return home after 6 years away between Tunisia and France. I watch them in the evenings—those of my dad, mom, aunt, and especially my nephews—to smile and recharge.",
        images: [Guineenne, sport, merplage],
        icons: ["ri-heart-pulse-line", "ri-dumbbell-line", "ri-medal-line"],
      },
      {
        id: 1,
        tag: "CREATIVITY & PASSION",
        title: "Music & Cooking",
        description:
          "Music accompanies me every day—I am addicted to it and always walk around with my headphones to escape, while cooking allows me to create, experiment, and share precious moments.",
        anecdote: "💡 My secret recipe: good headphones on, a music mix, and off to walk miles along the banks of the Rhône river on foot! 🎧",
        images: [salif, music, cuisine],
        icons: ["ri-music-2-line", "ri-headphone-line", "ri-restaurant-line"],
      },
      {
        id: 2,
        tag: "TRAVEL & DISCOVERY",
        title: "Travel & New Horizons",
        description:
          "Exploring new horizons, from Tunisia to Lyon through magical getaways, allows me to discover other cultures and constantly step out of my comfort zone.",
        anecdote: "💡 D'accordo: In Tunisia, I've almost toured the whole country, and I even have my adoptive family there, the Slimen family in Gafsa ❤️.",
        images: [tunisie, disney, Lyon],
        icons: ["ri-plane-line", "ri-earth-line", "ri-map-pin-line"],
      },
    ]
  }
};

// =======3. COMPOSANT LOISIRS
const Loisirs = ({ lang = "fr" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Récupération des données selon la langue active
  const content = loisirsData[lang] || loisirsData.fr;
  const activeSlide = content.groups[currentSlide];

  return (
    <section className="loisirs-section-complete" id="loisirs">
      
      {/* 1. HEADER */}
      <div className="loisirs-header-top">
        <div className="loisirs-heart-icon-wrapper">
          <i className="ri-heart-3-fill"></i>
        </div>

        <div className="loisirs-badge">
          <span>{content.badge}</span>
        </div>

        <h2 className="loisirs-title-main">
          {content.titleMain}<span className="highlight-text">{content.titleHighlight}</span>{content.titleEnd}
        </h2>

        <p className="loisirs-subtitle-main">
          {content.subtitle}
        </p>
      </div>

      {/* 2. CONTENU PRINCIPAL */}
      <div className="loisirs-body-middle">
        
        {/* PARTIE GAUCHE : TEXTE, ANECDOTE & DOTS */}
        <div className="loisirs-left-content">
          <span className="slide-tag">
            {activeSlide.tag}
          </span>

          <h3 className="slide-title">
            {activeSlide.title}
          </h3>

          <p className="slide-description">
            {activeSlide.description}
          </p>

          {/* Cadre de l'anecdote */}
          <div className="loisirs-anecdote-box">
            <i className="ri-double-quotes-l anecdote-quote-icon"></i>
            <p>{activeSlide.anecdote}</p>
          </div>

          {/* Points de navigation */}
          <div className="caroussel-dots">
            {content.groups.map((slide, index) => (
              <button
                key={slide.id}
                className={`dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                title={`Aller au slide ${index + 1}`}
                aria-label={`Afficher ${slide.title}`}
              />
            ))}
          </div>
        </div>

        {/* PARTIE DROITE : MOSAÏQUE PHOTOS DYNAMIQUE */}
        <div className="loisirs-right-grid">
          <div className="grid-mosaic-slant">
            {activeSlide.images.map((imgSrc, index) => (
              <div className={`mosaic-card card-${index + 1}`} key={index}>
                <img
                  src={imgSrc}
                  alt={`${activeSlide.title} - illustration ${index + 1}`}
                />
                <div className="circle-badge">
                  <i className={activeSlide.icons[index] || "ri-star-line"}></i>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 3. FOOTER / CITATION */}
      <div className="loisirs-footer-bottom">
        <div className="quote-container-bottom">
          <i className="ri-double-quotes-l quote-icon-left"></i>
          <p>
            {content.quote}
          </p>
          <i className="ri-double-quotes-r quote-icon-right"></i>
        </div>
      </div>

    </section>
  );
};

export default Loisirs;