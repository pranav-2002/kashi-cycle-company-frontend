import React, { useEffect, useState } from "react";
import SectionHero from "../section/SectionHero";
import { Container, Row, Col } from "reactstrap";
import CycleCard from "./CycleCard";

const Cycles = () => {
  const cyclesData = [
    {
      id: 1,
      brand: "Trek",
      rating: 2.7,
      cycleName: "Domane SL 6",
      imgUrl: "https://m.media-amazon.com/images/I/71Fy10Q9OPL.jpg",
      model: "SL 6",
      price: 3499.99,
      speed: 22,
    },
    {
      id: 3,
      brand: "Atlas",
      rating: 4,
      cycleName: "Atlas MD 4",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1684820879021-c51e33511861?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3ljbGV8ZW58MHx8MHx8fDA%3D",
      model: "SL 6",
      price: 1499.99,
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
  ];

  const [sortedData, setSortedData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "low") {
      setSortedData(cyclesData.sort((a, b) => a.price - b.price));
    } else if (filter === "high") {
      setSortedData(cyclesData.sort((a, b) => b.price - a.price));
    } else if (filter === "popularity") {
      setSortedData(cyclesData.sort((a, b) => b.rating - a.rating));
    } else {
      setSortedData(cyclesData.sort());
    }
  }, [filter]);

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

                <select onChange={(e) => setFilter(e.target.value)}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                  <option value="popularity">Top Rated</option>
                </select>
              </div>
            </Col>

            {sortedData.map((item) => (
              <CycleCard item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Cycles;
