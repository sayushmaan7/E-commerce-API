import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Navbar from "./navbar/Navbar";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/ProductDetails/Product";
import AddProduct from "../components/AddProduct/AddProduct";



function App() {

  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
