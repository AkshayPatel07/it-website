import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../View/Home";
import Product from "../View/Product";
import ProductOverView from "../View/ProductOverView";
import AboutUs from "../View/AboutUs";
import Sector from "../View/Sector";

const Landing = () => {
  
  return (
    <div>
      
      <Router>
        <Header />
        <Routes basename="/">
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productoverview" element={<ProductOverView />} /> 
          <Route path="/aboutus" element={<AboutUs />} /> 
          <Route path="/sector" element={<Sector />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Landing;