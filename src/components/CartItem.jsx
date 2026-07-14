import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Cart.css';

function CartItem(props) {

  let item = props.item;

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

        <div className="quantity-selector" style={{ height: '36px' }}>
          <button
            onClick={function() { props.onDecrease(item.id); }}
            className="qty-btn"
            style={{ width: '32px' }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="qty-value" style={{ width: '32px', fontSize: '13px' }}>
            {item.quantity}
          </div>
          <button
            onClick={function() { props.onIncrease(item.id); }}
            className="qty-btn"
            style={{ width: '32px' }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      <button
        onClick={function() { props.onRemove(item.id); }}
        className="cart-item-remove-btn"
        title="Remove"
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>

    </div>
  );
}

export default CartItem;
