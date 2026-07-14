import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';
import '../css/Cart.css';

const Cart = ({ cartItems, onIncrease, onDecrease, onRemove, onClearCart }) => {
  
  const checkout = () => {
    toast.success('Order placed! Thanks for shopping 🎉');
    onClearCart(false);
  };

  if (cartItems.length === 0) {
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

  // Calculate cart total price
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container">
      <div style={{ margin: '20px 0 30px 0' }}>
        <h1>Shopping Cart</h1>
        <p>Check your items below.</p>
      </div>

      <div className="cart-layout">
        
        {/* Left side - list of all cart items */}
        <div className="cart-items-column">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onRemove={onRemove}
            />
          ))}
        </div>

        {/* Right side - checkout details & buttons */}
        <div className="cart-summary-column">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row total" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <span>Total Amount:</span>
            <span className="total-price" style={{ fontWeight: '800', color: '#4f46e5' }}>
              ${cartTotal.toFixed(2)}
            </span>
          </div>

          <button onClick={checkout} className="checkout-btn">
            Checkout <i className="fa-solid fa-credit-card"></i>
          </button>

          <button onClick={() => onClearCart(true)} className="clear-cart-btn">
            <i className="fa-solid fa-trash-can"></i> Clear Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
