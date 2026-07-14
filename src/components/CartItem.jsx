import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item-card">

      <div className="cart-item-img">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      <div className="cart-item-info">
        <span className="cart-item-category">{item.category}</span>
        <Link to={'/products/' + item.id}>
          <h3 className="cart-item-title">{item.title}</h3>
        </Link>
      </div>

      <div className="cart-item-price-qty">
        <div className="cart-item-price">${item.price}</div>

        <div className="quantity-selector">
          <button onClick={() => onDecrease(item.id)} className="qty-btn">−</button>
          <div className="qty-value">{item.quantity}</div>
          <button onClick={() => onIncrease(item.id)} className="qty-btn">+</button>
        </div>
      </div>

      <button onClick={() => onRemove(item.id)} className="cart-item-remove-btn" title="Remove">
        <i className="fa-solid fa-trash-can"></i>
      </button>

    </div>
  );
};

export default CartItem;
