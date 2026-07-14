import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import '../css/ProductDetails.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError('');

    axios.get('https://dummyjson.com/products/' + id)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
        setQuantity(1);
      })
      .catch(err => {
        setError('Could not load this product.');
        setLoading(false);
      });
  }, [id]);

  const addOne = () => setQuantity(quantity + 1);
  const removeOne = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ margin: '40px auto', textAlign: 'center' }}>
        <div className="error-view">
          <h3>Something went wrong</h3>
          <p>{error}</p>
          <Link to="/products" className="retry-btn" style={{ display: 'inline-block', marginTop: '16px' }}>
            Go back
          </Link>
        </div>
      </div>
    );
  }

  if (!product) return null;

  const stockLabel = product.stock < 10 ? 'Only ' + product.stock + ' left' : 'In Stock';
  const stockClass = product.stock < 10 ? 'low-stock' : 'in-stock';
  const rating = product.rating ? product.rating.toFixed(1) : '4.5';

  return (
    <div className="container">
      <Link to="/products" style={{ display: 'inline-block', marginBottom: '20px', fontWeight: 600, color: '#4f46e5' }}>
        <i className="fa-solid fa-arrow-left"></i> Back
      </Link>

      <div className="details-container">
        <div className="details-image-col">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="details-info-col">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>

          <div className="details-meta-row">
            <div className="details-rating">
              <i className="fa-solid fa-star"></i> {rating} Rating
            </div>
            <div className={'details-stock ' + stockClass}>
              {stockLabel}
            </div>
          </div>

          <div className="details-price">${product.price}</div>
          <p className="details-desc">{product.description}</p>

          <div className="details-action-row">
            <div className="quantity-selector">
              <button onClick={removeOne} className="qty-btn">−</button>
              <div className="qty-value">{quantity}</div>
              <button onClick={addOne} className="qty-btn">+</button>
            </div>

            <button onClick={() => onAddToCart(product, quantity)} className="add-to-cart-btn">
              <i className="fa-solid fa-cart-shopping"></i> Add {quantity} to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
