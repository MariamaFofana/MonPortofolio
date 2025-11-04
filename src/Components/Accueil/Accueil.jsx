import React from 'react';
import { Row, Col } from 'reactstrap';
import './Accueil.css';
import heroImg from '../../IMAGES/Photo1.jpg';

const Accueil = () => {
  return (
    <section className='section1'>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero_content'>
            <h2>Mon portfolio</h2>
            <p className='mb-4'>
              Ce portfolio présente une description de mon parcours scolaire et professionnel. <br />
              C'est aussi un espace où je partage qui je suis, mes loisirs, hobbies, échecs et réussites.
            </p>
          </div>
          <div className='search'>
            <input type='text' placeholder='search' />
            <button className='btn'>Search</button>
          </div>
        </Col>
        <Col lg='6' md='6'>
          <img src={heroImg} alt='accueil' className='image' />
        </Col>
      </Row>
    </section>
  );
}

export default Accueil;
