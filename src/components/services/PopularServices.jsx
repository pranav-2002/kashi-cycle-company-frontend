import React from "react";
import { Col, Row } from "reactstrap";
import "./PopularServices.css";

const PopularServices = () => {
  const servicesData = [
    {
      id: 1,
      title: "City Transfer",
      icon: "ri-map-pin-2-line",
      desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
    },

    {
      id: 2,
      title: "Whole  City Tour",
      icon: "ri-community-line",
      desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
    },

    {
      id: 3,
      title: "Unlimited Miles Car Rental",
      icon: "ri-roadster-line",
      desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
    },
  ];

  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

export default PopularServices;
