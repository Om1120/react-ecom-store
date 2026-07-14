import React from 'react';
import ProductCard from './ProductCard';
import '../css/Product.css';

const ProductList = ({ products, onAddToCart }) => {
  if (products.length === 0) {
    return (
      <div className="empty-view">
        <h3>No Products Found</h3>
        <p>Nothing here. Try a different category.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map(item => (
        <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
