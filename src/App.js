import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import CartProvider from "./store/CartProvider";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={[<Header />,<Home />]} />
          <Route path="/cart" element={[<Header />, <Cart />]} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
