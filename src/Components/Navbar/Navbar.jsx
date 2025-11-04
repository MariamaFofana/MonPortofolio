import React, { useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const menuRef = useRef(null);

  const menuToggle = () => {
    menuRef.current.classList.toggle("active_menu");
  };

  const categories = [
    { name: "Art", link: "#Art" },
    { name: "DevPerson", link: "#DevPerson" },
    { name: "Informatique", link: "#Informatique" },
    { name: "Marketing", link: "#Marketing" },
    { name: "Musique", link: "#Musique" },
    { name: "Photographie", link: "#Photographie" }
  ];

  const navItems = [
    { name: "Qui suis-je", link: "#About", icon: "ri-heart-2-fill" },
    { name: "Mes projets", link: "#Projets" },
    { name: "Contactez-moi", link: "#Contact", icon: "ri-bear-smile-fill" }
  ];

  return (
    <section>
      <div className="navbar">
        <div className="logo">
          <a className="link" href="/">
            <h2 className="">
              <i className="ri-infinity-line"></i>RiiRi.
            </h2>
          </a>
        </div>
        <div className="categories">
          <ul>
            <li className="with-submenu">
              Loisirs
              <ul className="submenu">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a className="link" href={category.link}>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <ul className="nav-links">
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
