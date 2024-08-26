import React from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./Footer.css";
const footerQuickLinks = [
  {
    display: "Formations",
    url: "#",
  },
  {
    display: "Stages",
    url: "#",
  },
  {
    display: "Projets",
    url: "#",
  },
  {
    display: "Associations",
    url: "#",
  },
];
const footerInfoLinks = [
  {
    display: "Blog",
    url: "#",
  },
  {
    display: "Plan du site ",
    url: "Plan",
  },
  {
    display: "Aide et support",
    url: "#",
  },
  {
    display: "Politique de confidentialité",
    url: "#",
  },
];
const Footer = () => {
  return (
    <section className="footer">
      <Row>
        <Col lg="3">
          <div className="logo">
            <h2 className="">
              <i className="ri-infinity-line"></i>RiiRi.
            </h2>
          </div>
          <div className="follows">
            <p className="mb-0">
              Mes Reseaux sociaux<i class="ri-service-line"></i>
            </p>
            <a href="https://www.facebook.com/mariama.fofana.771282/">
              <i className="ri-facebook-circle-line"></i>
            </a>
            <a href="https://www.instagram.com/mariama_at_fofana/">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="https://www.twitter.com">
              <i className="ri-twitter-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/m-fofana/">
              <i className="ri-linkedin-box-line"></i>
            </a>
          </div>
        </Col>
        <Col lg="3">
          <h6 className="links fw-bold">Carrières</h6>
          <ListGroup className="Link_list">
            {footerQuickLinks.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link_item">
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h6 className=" quick fw-bold">MonPorToFoLio</h6>
          <ListGroup className="Link_list">
            {footerInfoLinks.map((item, index) => (
              <ListGroupItem key={index} className="border-0 ps-0 link_item">
                <a href={item.url}>{item.display}</a>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3" className="contact">
          <h6 className="fw-bold">Je vous réponds dans de plus bref délai</h6>
          <p>Address: Lyon, France</p>
          <p>Phone 00 33 6 04 09 38 06 </p>
          <p>Email:mariamafof9@gmail.com</p>
        </Col>
      </Row>
      <div className="text-center p-4 final ">
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="ff">
          Fofana Mariama
        </a>        
      </div>
    </section>
  );
};

export default Footer;
