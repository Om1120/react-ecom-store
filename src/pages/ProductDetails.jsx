import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import '../css/ProductDetails.css';

function ProductDetails(props) {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(function() {
    setLoading(true);
    setError('');

    axios.get('https://dummyjson.com/products/' + id)
      .then(function(res) {
        setProduct(res.data);
        setLoading(false);
        setQuantity(1);
      })
      .catch(function(err) {
        setError('Could not load this product.');
        setLoading(false);
      });
  }, [id]);

  function addOne() {
    setQuantity(quantity + 1);
  }

  function removeOne() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    props.onAddToCart(product, quantity);
  }

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

  if (product === null) {
    return null;
  }

  let stockLabel = 'In Stock';
  let stockClass = 'in-stock';
  if (product.stock < 10) {
    stockLabel = 'Only ' + product.stock + ' left';
    stockClass = 'low-stock';
  }

  let rating = '4.5';
  if (product.rating) {
    rating = product.rating.toFixed(1);
  }

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
              <button onClick={removeOne} className="qty-btn">
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="qty-value">{quantity}</div>
              <button onClick={addOne} className="qty-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <button onClick={addToCart} className="add-to-cart-btn">
              <i className="fa-solid fa-cart-shopping"></i> Add {quantity} to Cart
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProductDetails;
