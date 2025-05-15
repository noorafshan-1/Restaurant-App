import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto p-3 min-h-[83vh]">
        <div className="flex flex-col items-center justify-center p-3">
          <div className="flex items-center justify-evenly w-full mb-5">
            <Link to="/pages/dosa">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>Dosa</h1>
              </div>
            </Link>
            <Link to="/pages/rice">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>Rice</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-evenly w-full mb-5">
            <Link to="/pages/south-indian">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>South Indian</h1>
              </div>
            </Link>
            <Link to="/pages/north-indian">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>North Indian</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-evenly w-full mb-5">
            <Link to="/foods1/chinese">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>Chinese</h1>
              </div>
            </Link>
            <Link to="/pages/snacks">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>Snacks</h1>
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-evenly w-full mb-5">
            <Link to="/pages/desserts">
              <div className="bg-gray-800 rounded-xl p-4 px-6 sm:px-10 md:px-16 hover:scale-110 transition duration-500 ease-in font-bold cursor-pointer text-white">
                <h1>Desserts</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="items-center justify-center hidden md:flex">
          <img
            src="https://www.freepnglogos.com/uploads/food-png/true-food-kitchen-35.png"
            alt="food"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
