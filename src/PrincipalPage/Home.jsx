import React from 'react';
import Navbar from '../Componoments/Navbar/Navbar';
import Footer from '../Componoments/Footer/Footer';
import Contact from '../Componoments/Contact/Contact';
import Header from '../Componoments/Header/Header';
import About from '../Componoments/About/About';
import CVitae from '../Componoments/CVitae/CVitae';
import Projets from '../Componoments/Projets/Projets';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
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
      <Footer />
    </>
  );
};

export default Home;
