// pages/Sell.jsx
import React, { useState } from "react";
import "./Sell.css";

const Sell = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Apartment listed for sale:", formData);
    setFormData({ title: "", price: "", location: "", description: "" });
  };

  return (
    <div className="sell-page">
      <h1>Sell Your Apartment</h1>
      <form className="sell-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">List Apartment</button>
      </form>
    </div>
  );
};

export default Sell;
