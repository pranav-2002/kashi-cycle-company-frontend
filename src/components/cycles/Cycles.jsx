import React from "react";
import SectionHero from "../section/SectionHero";
import { Container, Row, Col } from "reactstrap";
import CycleCard from "./CycleCard";

const Cycles = () => {
  const cyclesData = [
    {
      id: 1,
      brand: "Trek",
      rating: 4.7,
      cycleName: "Domane SL 6",
      imgUrl: "https://m.media-amazon.com/images/I/71Fy10Q9OPL.jpg",
      model: "SL 6",
      price: 3499.99,
      speed: 22,
    },
    {
      id: 2,
      brand: "Hero",
      rating: 3.7,
      cycleName: "Hero 6",
      imgUrl:
        "https://m.media-amazon.com/images/I/51VEYM9nfhL._AC_UF894,1000_QL80_.jpg",
      model: "SL 6",
      price: 1599.99,
      speed: 22,
    },
    {
      id: 3,
      brand: "Trek",
      rating: 4.7,
      cycleName: "Domane SL 6",
      imgUrl: "https://m.media-amazon.com/images/I/71Fy10Q9OPL.jpg",
      model: "SL 6",
      price: 1499.99,
      speed: 22,
    },
  ];

  return (
    <div>
      <SectionHero title={"Cycle Listings"} />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {cyclesData.map((item) => (
              <CycleCard item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Cycles;
