import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";
import logoImg from "../../IMAGES/MonLogo.png"; 
import { translations } from "../Translations/translations"; 

const Footer = ({ lang = "fr" }) => {
  const t = translations[lang].footer;

  return (
    <section className="footer">
      <Row>
        <Col lg="3">
          {/* Logo */}
          <div className="footer-logo-container">
            <img src={logoImg} alt="Logo Mariama Fofana" className="footer-logo" />
          </div>
          <div className="follows">
            <p className="mb-0">
              {t.socialTitle} <i className="ri-service-line"></i>
            </p>
            <a href="https://www.facebook.com/mariama.fofana.771282/" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="https://www.instagram.com/mariama_at_fofana/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            {/* Remplacement de Twitter par WhatsApp */}
            <a href="https://wa.me/33604093806" target="_blank" rel="noopener noreferrer" title={lang === "fr" ? "Discuter sur WhatsApp" : "Chat on WhatsApp"}>
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/m-fofana/" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </Col>

        {/* Colonne Carrières */}
        <Col lg="3">
          <h6 className="links fw-bold">{t.col1Title}</h6>
          <ListGroup className="Link_list">
            {t.col1Links.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link_item bg-transparent">
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        {/* Colonne Mon Portfolio */}
        <Col lg="3">
          <h6 className="quick fw-bold">{t.col2Title}</h6>
          <ListGroup className="Link_list">
            {t.col2Links.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link_item bg-transparent">
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>

        {/* Colonne Contact */}
        <Col lg="3" className="contact">
          <h6 className="fw-bold">{t.contactTitle}</h6>
          <p>{t.address}</p>
          <p>{t.phone}</p>
          <p>{t.email}</p>
          <small className="text-muted d-block mt-2" style={{ fontSize: "0.8rem", fontStyle: "italic" }}>
            {lang === "fr" 
              ? "💡 Ce numéro est également joignable directement via WhatsApp !" 
              : "💡 This phone number is also available directly on WhatsApp!"}
          </small>
        </Col>
      </Row>

      <div className="text-center p-4 final">
        {t.copyright}
        <span className="text-reset fw-bold ms-1">Fofana Mariama</span>
      </div>
    </section>
  );
};

export default Footer;