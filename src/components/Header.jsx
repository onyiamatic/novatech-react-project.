import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/" aria-label="NOVATECH home">
          <span className="brand-mark">N</span><span>NOVA<span className="brand-light">TECH</span></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link className="cart-link" to="/products">Cart <span>{cartCount}</span></Link>
      </div>
    </header>
  );
}
