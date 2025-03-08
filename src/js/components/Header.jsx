import React from "react";

const Header = ({ headerTitle, headerText, image }) => {
  return (
    <div className="header-container">
      <img src={image} className="card-img-top" alt={headerTitle} />
      <div className="card-body">
        <h5 className="card-title">{headerTitle}</h5>
        <p className="card-text">{headerText}</p>
        <a href="#" className="btn">
          Call to Action!
        </a>
      </div>
    </div>
  );
};

export default Header;
