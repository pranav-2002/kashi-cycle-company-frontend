import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./CycleCard.css";

const CycleCard = (props) => {
  const { imgUrl, model, cycleName, speed, price, rating } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="kashi cycle" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{cycleName}</h4>
          <h6 className="rent__price text-center mt-">₹{price}</h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-drag-move-line"></i>
              {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-star-fill"></i>
              {rating}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {speed}
            </span>
          </div>
          <button className=" w-100 car__item-btn car__btn-rent">
            <Link aria-disabled to={`/cycle/${cycleName}`}>
              Available
            </Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CycleCard;
