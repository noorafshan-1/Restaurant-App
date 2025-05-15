import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Food from "./pages/Food";
import Rice from "./pages/Rice";
import Dosa from "./pages/Dosa";
import Desserts from "./pages/Desserts";
import Snacks from "./pages/Snacks";
import Chinese from "./pages/Chinese";
// import './App.css';
import "./styles/global.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/foods" element={<Food />} />
          <Route path="/pages/dosa" element={<Dosa />} />
          <Route path="/pages/rice" element={<Rice />} />
          <Route path="/pages/south-indian" element={<Dosa />} />
          <Route path="/pages/north-indian" element={<Dosa />} />
          <Route path="/pages/chinese" element={<Chinese />} />
          <Route path="/pages/snacks" element={<Snacks />} />
          <Route path="/pages/desserts" element={<Desserts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
