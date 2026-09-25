import './App.css';
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';

/*------------Composants globaux----------------*/
import Navbar from '../src/Components/Navbar/Navbar';
import Footer from '../src/Components/Footer/Footer'; /* Ajout du Footer ici */

/*------------Pages et Sections----------------*/
import Home from './PrincipalPage/Home.jsx';
import Contact from '../src/Components/Contact/Contact.jsx';
import About from '../src/Components/About/About.jsx';
import CVitae from '../src/Components/CVitae/CVitae.jsx';
import Projets from '../src/Components/Projets/Projets.jsx';
import Loisirs from '../src/Components/Loisirs/loisir.jsx';
import Certification from '../src/Components/Certification/Certification.jsx';
function App() {
  // 1. Déclaration de l'état de la langue (Français par défaut)
  const [lang, setLang] = useState("fr");

  // 2. Fonction pour basculer entre "fr" et "en"
  const toggleLang = () => {
    setLang((prevLang) => (prevLang === "fr" ? "en" : "fr"));
  };
  return (        
      <>
      <Navbar lang={lang} toggleLang={toggleLang} />
      
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/Contact" element={<Contact lang={lang} />} />
        <Route path="/Projets" element={<Projets lang={lang} />} />
        <Route path="/About" element={<About lang={lang} />} />
        <Route path="/CVitae" element={<CVitae lang={lang} />} />
        <Route path="/Loisirs" element={<Loisirs lang={lang} />} />
        <Route path="/Certification" element={<Certification lang={lang} />} />
      </Routes>
      
      <Footer lang={lang} />    
      </>
     
  );
}

export default App;