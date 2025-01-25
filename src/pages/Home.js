// pages/Home.jsx
import React from "react";
import apartments from "../data/apartments";
import ApartmentCard from "../components/ApartmentCard/ApartmentCard";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Available Apartments</h1>
      <div className="apartment-list">
        {apartments.map((apartment) => (
          <ApartmentCard key={apartment.id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Home;
