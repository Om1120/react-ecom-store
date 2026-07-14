import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';
import '../css/Cart.css';

function Cart(props) {

  // this runs when user clicks the checkout button
  function checkout() {
    toast.success('Order placed! Thanks for shopping 🎉');
    props.onClearCart(false); // clear the cart but don't show another toast
  }

  // if cart has no items, show the empty screen
  if (props.cartItems.length === 0) {
    return (
      <div className="container">
        <div className="cart-empty-container">
          <div className="cart-empty-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <h2 className="cart-empty-title">Cart is Empty</h2>
          <p className="cart-empty-desc">
            You have not added anything yet. Go shop something!
          </p>
          <Link to="/products" className="cart-empty-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  // cart has items, show them
  return (
    <div className="container">

      <div style={{ margin: '20px 0 30px 0' }}>
        <h1>Shopping Cart</h1>
        <p>Check your items below.</p>
      </div>

      <div className="cart-layout">

        {/* left side - list of all cart items */}
        <div className="cart-items-column">
          {props.cartItems.map(function(item) {
            return (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={props.onIncrease}
                onDecrease={props.onDecrease}
                onRemove={props.onRemove}
              />
            );
          })}
        </div>

        {/* right side - checkout buttons */}
        <div className="cart-summary-column">
          <h2 className="summary-title">Order Summary</h2>

          <button onClick={checkout} className="checkout-btn">
            Checkout <i className="fa-solid fa-credit-card"></i>
          </button>

          <button onClick={function() { props.onClearCart(true); }} className="clear-cart-btn">
            <i className="fa-solid fa-trash-can"></i> Clear Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default Cart;
