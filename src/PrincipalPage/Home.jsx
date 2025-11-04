import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/Contact/Contact';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import CVitae from '../Components/CVitae/CVitae';
import Projets from '../Components/Projets/Projets';

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
