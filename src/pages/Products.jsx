import React from 'react';
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Products({ onAdd }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(products.map((product) => product.category))];
  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [search, category]);

  return (
    <main className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">THE COLLECTION</span>
        <h1>Find your next<br /><span>favourite tool.</span></h1>
        <p>Explore our sample collection of devices and accessories.</p>
      </section>
      <section className="container section products-section">
        <div className="catalog-tools">
          <label className="search-box"><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products..." aria-label="Search products" /></label>
          <div className="filter-list" aria-label="Filter by category">
            {categories.map((item) => <button key={item} className={category === item ? "filter-chip active" : "filter-chip"} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
        </div>
        {filteredProducts.length ? <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div> : <div className="empty-state"><h3>No products found</h3><p>Try another search or category.</p><button className="text-link" onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button></div>}
      </section>
    </main>
  );
}
