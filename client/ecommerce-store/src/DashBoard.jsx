import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import { Shop } from "./Shop";
import { Cart } from "./Cart";

function DashBoard(props) {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Shop cart={cart} cartHandler={setCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cart={cart} cartHandler={setCart} email={props.email} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default DashBoard;
