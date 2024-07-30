import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import CycleIcon from "../icons/CycleIcon";

const Footer = () => {
  const quickLinks = [
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/cycles",
      display: "Cycle Listing",
    },
    {
      path: "/accessories",
      display: "Accessories Listing",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/" className=" d-flex align-items-center gap-2">
                  <CycleIcon />
                  <span>
                    Kashi Cycle <br /> Company
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex
              quam veniam, omnis expedita animi quibusdam obcaecati mollitia?
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">123 Varanasi, UP, India</p>
              <p className="office__info">Phone: +7860325568</p>

              <p className="office__info">
                Email: kashi-cycle-company@gmail.com
              </p>

              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
