import React, { useState } from "react";
import { Cart } from "./Cart";

export const Product = (props) => {
  const { product_id, title, price, description, image, count } = props.product;

  function handleCart() {
    props.cartHandler((prev) => [...prev, props.product]);
  }

  return (
    <div className="flex-1 grow-0 basis-1/4 gap-x-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Image + Desc */}
      <div className="m-3">
        <div className=" p-8 rounded-t-lg">
          <img src={image} alt={title} />
        </div>
        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="text-neutral-600 dark:text-neutral-200">
            {description}
          </p>
        </div>
      </div>
      {/* Price + Button */}
      <div className="flex flex-row flex-wrap m-3 items-center justify-between">
        <p className="font-bold text-gray-900 dark:text-white">{price}</p>
        <button
          className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
          onClick={handleCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
