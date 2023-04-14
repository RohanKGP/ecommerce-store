import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Product = (props) => {
  const { product_id, title, price, description, image, count } = props.product;

  function handleCart() {
    // toast("Item Added to Cart!");

    const exists = props.cart.some(
      (product) => product.product_id === props.product.product_id
    );

    if (exists === false) {
      props.cartHandler((prev) => [...prev, props.product]);
    }
  }

  return (
    <div className="grid grid-cols-4 grid-rows-5 rounded-md bg-white">
      <img
        className="col-start-2 row-start-1 col-span-2 row-span-2 w-full h-full p-4"
        src={image}
        alt={title}
      />
      <div className="col-start-1 row-start-3 col-span-4 row-span-2 p-2">
        <p className="text-center">
          <b>{title}</b>
        </p>
        <p className="text-center">{description}</p>
      </div>
      <div className="col-start-1 row-start-5 col-span-2 row-span-1 p-4">
        <p className="">{price}</p>
      </div>
      <div className="col-start-3 col-span-2 row-start-5 row-span-1 p-4">
        <button
          className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
          onClick={() => {
            handleCart();
          }}
        >
          Add to cart
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};
