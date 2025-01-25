// components/ApartmentCard/ApartmentCard.jsx
import React from "react";
import "./ApartmentCard.css";

const ApartmentCard = ({ apartment }) => {
  const { title, image, price, location, description } = apartment;

  return (
    <div className="apartment-card">
      <img src={image} alt={title} className="apartment-image" />
      <div className="apartment-details">
        <h3>{title}</h3>
        <p>{location}</p>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ApartmentCard;
