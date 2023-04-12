import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Shop } from "./Shop";
import { Cart } from "./Cart";

function DashBoard() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default DashBoard;
