import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/assets/foodimage.jpg')` }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to FoodieHub
        </h1>
        <p className="text-lg text-white mb-4">
          Explore delicious meals and get them delivered fast!
        </p>
        <Link to="/menu">
          <button className="hover:bg-green-400 hover:text-white bg-green-100 text-green-600 tracking-widest transition duration-300 ease-in-out font-bold px-6 py-3 rounded-lg cursor-pointer">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
