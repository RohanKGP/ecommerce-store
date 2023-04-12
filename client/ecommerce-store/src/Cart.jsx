import React from "react";

export const Cart = (props) => {

  const [count,setCount] = useState('');
  return (
    <div>
      <h1 className="text-center text-3xl	">Your Cart items: </h1>
      <div className="m-4 h-1/2 flex flex-wrap flex-row gap-x-10 gap-y-10 justify-center items-stretch">
        {props.cart.map((item) => {
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
              <div className="flex flex-row flex-wrap m-3 items-center justify-between">
                <p className="font-bold text-gray-900 dark:text-white">
                  {item.price}
                </p>
                <button className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                  +
                </button>
                <p>{count}</p>
                <button className="text-white bg-blue-700 hover:bg-blue-80 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                  -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
