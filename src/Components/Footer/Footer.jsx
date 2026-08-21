import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";
import logoImg from "../../IMAGES/MonLogo.png"; 

const footerQuickLinks = [
  { display: "Formations", url: "#CVitae" },
  { display: "Stages", url: "#CVitae" },
  { display: "Associations", url: "#CVitae" },
];

const footerInfoLinks = [
  { display: "À propos", url: "#about" },
  { display: "Mes Projets", url: "#projets" },
  { display: "Contact", url: "#Contact" },
];

const Footer = () => {
  return (
    <section className="footer">
      <Row>
        <Col lg="3">
          {/* Remplacement du texte et de l'icône par l'image du logo */}
          <div className="footer-logo-container">
            <img src={logoImg} alt="Logo Mariama Fofana" className="footer-logo" />
          </div>
          <div className="follows">
            <p className="mb-0">
              Mes Réseaux sociaux <i className="ri-service-line"></i>
            </p>
            <a href="https://www.facebook.com/mariama.fofana.771282/" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="https://www.instagram.com/mariama_at_fofana/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/m-fofana/" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </Col>
        <Col lg="3">
          <h6 className="links fw-bold">Carrières</h6>
          <ListGroup className="Link_list">
            {footerQuickLinks.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link_item bg-transparent">
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h6 className="quick fw-bold">MonPortoFolio</h6>
          <ListGroup className="Link_list">
            {footerInfoLinks.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link_item bg-transparent">
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3" className="contact">
          <h6 className="fw-bold">Je vous réponds dans les plus brefs délais</h6>
          <p>Adresse : Lyon, France</p>
          <p>Téléphone : 06 04 09 38 06</p>
          <p>Email : mariamafof9@gmail.com</p>
        </Col>
      </Row>
      <div className="text-center p-4 final">
        © 2026 Copyright : 
        <span className="text-reset fw-bold ms-1">Fofana Mariama</span>
      </div>
    </section>
  );
};

export default Footer;