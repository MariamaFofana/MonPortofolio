import React, { useRef } from "react";
import "./Navbar.css";
// Import de ton logo depuis le dossier IMAGES
import logoRiiri from "../../IMAGES/MonLogo.png";

const Navbar = () => {
  const menuRef = useRef(null);

  // Fonction pour afficher/masquer le menu sur mobile
  const menuToggle = () => {
    menuRef.current.classList.toggle("active_menu");
  };

  // Les éléments de ta navigation principale
  const navItems = [
    { name: "Qui suis-je", link: "#About", icon: "ri-heart-2-fill" },
    { name: "Mes projets", link: "#Projets" },
    { name: "Contactez-moi", link: "#Contact", icon: "ri-bear-smile-fill" }
  ];

  return (
    <section>
      <div className="navbar">
        
        {/* --- SECTION LOGO --- */}
        <div className="logo">
          <a className="link" href="/">
            <img 
              src={logoRiiri} 
              alt="Logo RiiRi" 
              className="logo-img" 
            />
          </a>
        </div>

        {/* --- SECTION LOISIRS (Vers la page type réseau social) --- */}
        <div className="categories">
          <ul>
            <li className="nav_item">
              <a className="link" href="/Loisirs"> 
                <i className="ri-layout-grid-fill"></i> Loisirs
              </a>
            </li>
          </ul>
        </div>

        {/* --- BOUTON MENU MOBILE --- */}
        <span className="mobile_menu" onClick={menuToggle}>
          <i className="ri-menu-line"></i>
        </span>

        {/* --- LIENS DE NAVIGATION PRINCIPAUX --- */}
        <ul className="nav-links" ref={menuRef}>
          {navItems.map((item) => (
            <li className="nav_item" key={item.name}>
              <a className="link" href={item.link}>
                {item.name} {item.icon && <i className={item.icon}></i>}
              </a>
            </li>
          ))}
          <li>
            <i className="ri-search-eye-line"></i>
          </li>
        </ul>
        
      </div>
    </section>
  );
};

export default Navbar;