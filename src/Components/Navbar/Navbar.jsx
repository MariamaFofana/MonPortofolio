import React, { useRef } from "react";
import "./Navbar.css";
import logoRiiri from "../../IMAGES/MonLogo.png";

const Navbar = ({ lang, toggleLang }) => {
  const menuRef = useRef(null);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active_menu");
  };

  const navTexts = {
    fr: {
      about: "Qui suis-je",
      projects: "Mes projets",
      loisirs: "Loisirs",
      contact: "Contactez-moi",
    },
    en: {
      about: "About me",
      projects: "My projects",
      loisirs: "Hobbies",
      contact: "Contact me",
    },
  };

  const t = navTexts[lang];

  const navItems = [
    { name: t.about, link: "#About", icon: "ri-heart-2-fill" },
    { name: t.projects, link: "#Projets" },
    { name: t.contact, link: "#Contact", icon: "ri-bear-smile-fill" },
  ];

  return (
    <section>
      <div className="navbar">
        
        {/* --- 1. SECTION LOGO --- */}
        <div className="logo">
          <a className="link" href="/">
            <img 
              src={logoRiiri} 
              alt="Logo RiiRi" 
              className="logo-img" 
            />
          </a>
        </div>

        {/* --- 2. BOUTON LOISIRS --- */}
        <div className="categories">
          <ul>
            <li className="nav_item">
              <a className="link" href="#Loisirs"> 
                <i className="ri-layout-grid-fill"></i> {t.loisirs}
              </a>
            </li>
          </ul>
        </div>

        {/* --- 3. BOUTON MENU MOBILE --- */}
        <span className="mobile_menu" onClick={menuToggle}>
          <i className="ri-menu-line"></i>
        </span>

        {/* --- 4. LIENS DE NAVIGATION PRINCIPAUX --- */}
        <ul className="nav-links" ref={menuRef}>
          {navItems.map((item) => (
            <li className="nav_item" key={item.name}>
              <a className="link" href={item.link}>
                {item.name} {item.icon && <i className={item.icon}></i>}
              </a>
            </li>
          ))}

          {/* --- 5. BOUTON DE BASCULE DE LANGUE TOUT À LA FIN DU MENU --- */}
          <li className="nav_item lang-item-wrapper">
            <button className="lang-toggle-btn" onClick={toggleLang} title="Changer de langue">
              <i className="ri-global-line"></i>
              <span>{lang === "fr" ? "EN" : "FR"}</span>
            </button>
          </li>
        </ul>
        
      </div>
    </section>
  );
};

export default Navbar;