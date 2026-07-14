import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Product.css';

const ProductCard = ({ product, onAddToCart }) => {
  const rating = product.rating ? product.rating.toFixed(1) : '4.5';

  const handleAdd = (e) => {
    e.preventDefault();
    onAddToCart(product);
  };

  return (
    <div className="product-card">

      <Link to={'/products/' + product.id} className="card-img-link">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </Link>

      <div className="card-details">

        <div className="card-rating-badge">
          <i className="fa-solid fa-star"></i> {rating}
        </div>

        <Link to={'/products/' + product.id}>
          <h3 className="card-title">{product.title}</h3>
        </Link>

        <div className="card-price-row">
          <span className="card-price">${product.price}</span>
          <button onClick={handleAdd} className="card-add-btn" title="Add to Cart">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
