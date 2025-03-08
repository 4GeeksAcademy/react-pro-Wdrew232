import React from "react";

const Cards = ({ cardData }) => {
  return (
    <div>
      <div className="card-container">
        <img
          src={cardData.image}
          className="card-img-top"
          alt={cardData.cardTitle}
        />
        <div className="card-body">
          <h5 className="card-title">{cardData.cardTitle}</h5>
          <p className="card-text">{cardData.description}</p>
          <a href="#" className="btn btn-primary">
            Find out more!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
