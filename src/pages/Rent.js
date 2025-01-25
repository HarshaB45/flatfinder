// pages/Rent.jsx
import React from "react";
import apartments from "../data/apartments";
import ApartmentCard from "../components/ApartmentCard/ApartmentCard";

const Rent = () => {
  const rentalApartments = apartments.filter((apt) => apt.type === "rent");

  return (
    <div className="rent-page">
      <h1>Rent Apartments</h1>
      <div className="apartment-list">
        {rentalApartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Rent;
