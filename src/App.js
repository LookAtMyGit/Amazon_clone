import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import CartProvider from "./store/CartProvider";
import { AuthProvider } from "./store/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//In order to use Stripe it is required to upgrade your firebase account to the "Blaze plan".
// But... unfortunately, this option is not available for BY and RU region anymore.
//(this countries are not included on firebase payment form and we have problems with online payments in general)

const promice = loadStripe("publishableKey", { locale: "en" });

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/payment"
              element={
                <Elements stripe={promice}>
                  <Payment />
                </Elements>
              }
            />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  );
}
// ProtectedRoute (only when you logged in) read and try to implement.
export default App;
