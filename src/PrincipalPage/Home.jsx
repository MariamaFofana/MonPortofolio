import React from 'react';
import Header from '../Components/Header/Header';
import News from '../Components/News/News';
import About from '../Components/About/About';
import CVitae from '../Components/CVitae/CVitae';
import Certification from '../Components/Certification/Certification';
import Projets from '../Components/Projets/Projets';
import Loisirs from '../Components/Loisirs/loisir';
import Contact from '../Components/Contact/Contact';

// On récupère `lang` depuis App.js via les props de la route <Home lang={lang} />
const Home = ({ lang }) => {
  return (
    <>
      <Header lang={lang} />
      <News lang={lang} />
      
      <section id="About">
        <About lang={lang} />
      </section>
      
      <section id="CVitae">
        <CVitae lang={lang} />
      </section>
      
      <section id="Certification">
        <Certification lang={lang} />
      </section>
      
      <section id="Projets">
        <Projets lang={lang} />
      </section>
      
      <section id="Loisirs">
        <Loisirs lang={lang} />
      </section>
      
      <section id="Contact">
        <Contact lang={lang} />
      </section>
    </>
  );
};

export default Home;