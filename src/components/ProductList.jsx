import React from 'react';
import ProductCard from './ProductCard';
import '../css/Product.css';

function ProductList(props) {

  if (props.products.length === 0) {
    return (
      <div className="empty-view">
        <h3>No Products Found</h3>
        <p>Nothing here. Try a different category.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {props.products.map(function(item) {
        return (
          <ProductCard key={item.id} product={item} onAddToCart={props.onAddToCart} />
        );
      })}
    </div>
  );
}

export default ProductList;
