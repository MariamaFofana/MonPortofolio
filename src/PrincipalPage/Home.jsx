import React from 'react';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import CVitae from '../Components/CVitae/CVitae';
import Projets from '../Components/Projets/Projets';
import News from '../Components/News/News';
import Loisirs from '../Components/Loisirs/loisir';

const Home = () => {
  return (
    <>
      <Header />
      <News />
      <section id="About">
        <About />
      </section>
      <section id="CVitae">
        <CVitae />
      </section>
      <section id="Projets">
        <Projets />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Loisirs">
        <Loisirs />
      </section>
    </>
  );
};

export default Home;