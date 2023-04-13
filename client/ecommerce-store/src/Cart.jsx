import React, { useEffect, useState } from "react";
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

  console.log(props.email);

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
  }

  function handleOrders() {
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
  }

  return (
    <div>
      <div className="flex m-4">
        <h1 className="text-center text-3xl">Your Cart items:</h1>
        <button
          onClick={handleOrders}
          className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Order
        </button>
      </div>
      <div className="m-4 h-1/2 flex flex-wrap flex-row gap-x-10 gap-y-10 justify-center items-stretch">
        {list.map((item) => {
          return (
            <div
              key={item.product_id}
              className="flex-1 grow-0 basis-1/4 gap-x-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              {/* Image + Desc */}
              <div className="m-3">
                <div className=" p-8 rounded-t-lg">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </div>
              </div>
              {/* Price + Button */}
              <div className="flex flex-col flex-wrap m-3 items-center justify-between">
                <p className="font-bold text-gray-900 dark:text-white">
                  {item.price}
                </p>
                <div className="flex flex-row m-10">
                  <button
                    onClick={() => handleDecrease(item.product_id)}
                    className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    -
                  </button>
                  <p className="text-white m-3 p-2"> {item.order_count}</p>
                  <button
                    onClick={() => handleIncrease(item.product_id)}
                    className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.product_id)}
                  className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Remove item
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
