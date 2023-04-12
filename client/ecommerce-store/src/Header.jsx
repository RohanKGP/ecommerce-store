import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              E-commerce Store
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/cart"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
