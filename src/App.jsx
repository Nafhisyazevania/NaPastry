import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Home from "./pages/Homepage";
import FAQ from "./pages/FaqPage";
import Cart from "./pages/Cart";
import Detail from "./pages/CroisantDetail";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
