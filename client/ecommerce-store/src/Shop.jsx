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
    <div
      className=" m-0 p-5 bg-slate-300
      grid gap-6 grid-cols-4 auto-rows-[minmax(0,400px)]
      lg:auto-rows-[minmax(0,600px)] lg:grid-cols-4 
      md:auto-rows-[minmax(0,600px)] md:grid-cols-2 
      sm:auto-rows-[minmax(0,600px)] sm:grid-cols-1 
      max-[640px]:grid-cols-1  max-[640px]:auto-rows-[minmax(0,600px)] "
    >
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
