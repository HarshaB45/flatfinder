// pages/Buy.jsx
import React from "react";
import apartments from "../data/apartments";
import ApartmentCard from "../components/ApartmentCard/ApartmentCard";

const Buy = () => {
  const buyApartments = apartments.filter((apt) => apt.type === "buy");

  return (
    <div className="buy-page">
      <h1>Buy Apartments</h1>
      <div className="apartment-list">
        {buyApartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Buy;
