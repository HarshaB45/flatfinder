// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
