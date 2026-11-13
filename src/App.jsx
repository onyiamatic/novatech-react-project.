import React from 'react';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

export default function App() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("novatech-cart")) || []; }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("novatech-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((current) => [...current, product]);
  }

  return (
    <div className="app">
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home onAdd={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products onAdd={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<main className="container not-found"><h1>Page not found</h1><a href="/">Return home</a></main>} />
      </Routes>
      <Footer />
      <div className="toast-hint" aria-live="polite">Demo store · Cart items: {cart.length}</div>
    </div>
  );
}
