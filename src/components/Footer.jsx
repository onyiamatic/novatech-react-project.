import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link className="brand footer-brand" to="/"><span className="brand-mark">N</span><span>NOVA<span className="brand-light">TECH</span></span></Link>
          <p>Technology for the way you live, work and play.</p>
        </div>
        <div className="footer-links"><Link to="/about">About</Link><Link to="/products">Products</Link><Link to="/contact">Contact</Link></div>
        <small>© {new Date().getFullYear()} NOVATECH. Student project demo.</small>
      </div>
    </footer>
  );
}
