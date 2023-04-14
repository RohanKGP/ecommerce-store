import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Cart = (props) => {
  const [list, setList] = useState(props.cart);

  useEffect(() => {
    const temp = list.map((item) => {
      let tempData = { ...item };
      tempData.order_count = 1; // Copy objec/ Set new field
      return tempData;
    });

    setList(temp);
  }, []);

  function handleIncrease(param1) {
    // param 1: product_id

    const index = list.findIndex((obj) => obj.product_id === param1);

    if (index !== -1) {
      const updatedList = [...list];
      const oldOrderCount = updatedList[index].order_count;
      const newOrderCount = Math.max(oldOrderCount + 1, 2); // ensure new order count is always greater than 1
      updatedList[index] = {
        ...updatedList[index],
        order_count: newOrderCount,
      };
      setList(updatedList);
    }
  }

  function handleDecrease(param1) {
    // param 1: product_id
    const index = list.findIndex((obj) => obj.product_id === param1);

    if (index !== -1) {
      const updatedList = [...list];
      const oldOrderCount = updatedList[index].order_count;
      const newOrderCount = Math.max(oldOrderCount - 1, 1); // ensure new order count is always greater than 1
      updatedList[index] = {
        ...updatedList[index],
        order_count: newOrderCount,
      };
      setList(updatedList);
    }
  }

  function handleRemove(param1) {
    // param 1: product_id

    // remove the object with the specified ID from the array
    const updatedList = list.filter((item) => item.product_id !== param1);

    // update the state variable with the new array
    setList(updatedList);

    const handlerList = props.cart.filter((item) => item.product_id !== param1);
    // update the props.cartHandler with the new array
    props.cartHandler(handlerList);
  }

  function handleOrders() {
    if (list.length > 0) {
      const url = "http://localhost:3000/api/orders/getOrders";

      fetch(url, {
        // method Changes
        method: "POST",
        body: JSON.stringify({
          email: props.email,
          list: list,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      toast("Order Placed Successfully, A Confirmation E-mail is sent to you!");
    } else {
      toast("Empty Cart!");
    }
  }

  console.log(`List inside the cart: ${JSON.stringify(list)}`);
  console.log(`Cart item list: ${JSON.stringify(props.cart)}`);

  return (
    <div>
      <div className="flex m-10 justify-evenly">
        <h1 className="text-center text-3xl">Your Cart Items</h1>
        <button
          onClick={() => {
            handleOrders();
          }}
          className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Order
        </button>
      </div>
      <div
        className="m-0 p-5 bg-slate-300
      grid gap-6 grid-cols-4 auto-rows-[minmax(0,400px)]
      lg:auto-rows-[minmax(0,600px)] lg:grid-cols-4 
      md:auto-rows-[minmax(0,600px)] md:grid-cols-2 
      sm:auto-rows-[minmax(0,600px)] sm:grid-cols-1 
      max-[640px]:grid-cols-1  max-[640px]:auto-rows-[minmax(0,600px)]"
      >
        {list.map((item) => {
          return (
            <div
              key={item.product_id}
              className="grid grid-cols-4 grid-rows-6 rounded-md bg-white"
            >
              <img
                className="col-start-2 row-start-1 col-span-2 row-span-2 w-full h-full p-4"
                src={item.image}
                alt={item.title}
              />
              <div className="col-start-1 row-start-3 col-span-4 row-span-2 p-2">
                <p className="text-center">
                  <b>{item.title}</b>
                </p>
                <p className="text-center">{item.description}</p>
              </div>
              <div className="col-start-1 row-start-5 col-span-4 row-span-1 p-4">
                <p className="text-center">{item.price}</p>
              </div>
              <div className="flex flex-row justify-evenly items-start col-start-1 col-span-4 row-start-6 row-span-1 p-2">
                <div className="flex flex-row p-2 ">
                  <button
                    onClick={() => handleDecrease(item.product_id)}
                    className="text-white bg-blue-700 hover:bg-blue-80 rounded-lg p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    -
                  </button>
                  <p className="text-black  text-center m-2">
                    {" "}
                    {item.order_count}
                  </p>
                  <button
                    onClick={() => handleIncrease(item.product_id)}
                    className="text-white bg-blue-700 hover:bg-blue-80 rounded-lg p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    +
                  </button>
                </div>
                <div className="p-2 ">
                  <button
                    onClick={() => handleRemove(item.product_id)}
                    className="text-white bg-blue-700 hover:bg-blue-80  rounded-lg p-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={500}
        limit={0}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
