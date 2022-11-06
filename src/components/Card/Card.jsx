import React from "react";

import "./Card.css";

const Card = (props) => {
  const { img, name } = props;

  return (
    <div className="Card">
      <img className="Imagen" src={img} alt="Mario" />
      <div className="card__text">
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          cupiditate!
        </p>
      </div>
    </div>
  );
};

export default Card;
