import React, { useEffect, useState } from "react";
import { Product } from "./Product";

export const Shop = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getResponse = async () => {
      const response = await fetch(
        "http://localhost:3000/api/products/getProducts",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setProducts(data);
    };
    getResponse();
  }, []);

  return (
    <div className="m-4 h-1/2 flex flex-wrap flex-row gap-x-10 gap-y-10 justify-center items-stretch">
      {products.map((product) => {
        return (
          <Product
            product={product}
            cart={props.cart}
            cartHandler={props.cartHandler}
          />
        );
      })}
    </div>
  );
};
