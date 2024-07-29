import React from "react";
import HomeSlider from "./HomeSlider";
import HomeAbout from "../about/HomeAbout";
import PopularServices from "../services/PopularServices";
import { Row, Col, Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeAbout />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>
            <PopularServices />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
