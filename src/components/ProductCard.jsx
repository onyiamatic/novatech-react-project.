import React from 'react';
const money = (amount) => `₦${amount.toLocaleString("en-NG")}`;

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-info">
        <span className="eyebrow">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>{money(product.price)}</strong>
          <button className="add-button" onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>＋ Add</button>
        </div>
      </div>
    </article>
  );
}
