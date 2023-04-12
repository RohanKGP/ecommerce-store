import React, { useState } from "react";
import "./input.css";
import DashBoard from "./DashBoard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isAuthenticated, setAuthStatus] = useState(false);

  function Signup(signup) {
    let url = "";
    if (signup) {
      url = "http://localhost:3000/api/user/addUser";
    } else {
      url = "http://localhost:3000/api/user/loginUser";
    }

    fetch(url, {
      // method Changes
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log(data.success);
          setAuthStatus(true);
        } else {
          setErrorMsg(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (isAuthenticated) {
    return <DashBoard />;
  }

  return (
    <div className="flex flex-col mt-72 items-center">
      <p>{errorMsg}</p>
      <h1 className="font-serif text-3xl p-4 m-4"> E-commerce Store</h1>
      <input
        type="text"
        placeholder="Enter Email"
        className="bg-gray-200 w-1/3 text-gray-800 rounded-lg focus:outline-none focus:ring focus:border-blue-300 p-3 m-5 text-center"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="bg-gray-200 w-1/3 text-gray-800 rounded-lg focus:outline-none focus:ring focus:border-blue-300 p-3 m-5 text-center"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex flex-row mt-7 mb-7 w-1/3 justify-evenly">
        <button
          className="bg-blue-500 text-white rounded-lg p-5 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => Signup(true)}
        >
          SignUp
        </button>
        <button
          className="bg-blue-500 text-white rounded-lg  p-5 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => Signup(false)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
