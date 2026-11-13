import React from 'react';
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home({ onAdd }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill"><span className="status-dot"></span> YOUR EVERYDAY TECH STORE</span>
            <h1>Good technology.<br /><span>Better everyday.</span></h1>
            <p>Discover dependable devices and useful accessories chosen to help you create, connect and get things done.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/products">Explore products <span>↗</span></Link>
              <Link className="text-link" to="/about">Get to know us</Link>
            </div>
            <div className="hero-stats">
              <div><strong>01</strong><span>Quality first</span></div>
              <div><strong>02</strong><span>Helpful support</span></div>
              <div><strong>03</strong><span>Simple shopping</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1400&q=90" alt="Modern desk with technology devices" />
            <div className="floating-note"><span className="note-icon">✦</span><div><strong>Make room for better</strong><small>Tools that fit your life.</small></div></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><span className="eyebrow">A GOOD PLACE TO START</span><h2>Featured products</h2></div>
          <Link className="text-link" to="/products">View all products ↗</Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
        </div>
      </section>

      <section className="feature-band">
        <div className="container feature-band-inner">
          <div><span className="eyebrow">THE NOVATECH PROMISE</span><h2>Tech shopping,<br />without the guesswork.</h2></div>
          <p>We make it easier to explore useful technology, compare your options and find products that fit your everyday needs.</p>
          <Link className="button button-light" to="/about">Our story <span>↗</span></Link>
        </div>
      </section>
    </>
  );
}
