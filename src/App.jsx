import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Categories from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

function App() {

  let savedCart = localStorage.getItem('cart');
  let startingCart = [];
  if (savedCart) {
    startingCart = JSON.parse(savedCart);
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartItems, setCartItems] = useState(startingCart);

  useEffect(function() {
    axios.get('https://dummyjson.com/products?limit=0')
      .then(function(res) {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(function(err) {
        setError('Something went wrong. Try again.');
        setLoading(false);
      });
  }, []);

  useEffect(function() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, qty) {
    if (!qty) {
      qty = 1;
    }

    let newCart = [];
    let found = false;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        let updated = {
          id: cartItems[i].id,
          title: cartItems[i].title,
          price: cartItems[i].price,
          category: cartItems[i].category,
          thumbnail: cartItems[i].thumbnail,
          quantity: cartItems[i].quantity + qty
        };
        newCart.push(updated);
        found = true;
        toast.success(product.title + ' quantity updated! 🛒');
      } else {
        newCart.push(cartItems[i]);
      }
    }

    if (!found) {
      let newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        thumbnail: product.thumbnail,
        quantity: qty
      };
      newCart.push(newItem);
      toast.success(product.title + ' added to cart! 🛒');
    }

    setCartItems(newCart);
  }

  function removeFromCart(productId) {
    let newCart = [];
    let removedItem = null;

    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === productId) {
        removedItem = cartItems[i];
      } else {
        newCart.push(cartItems[i]);
      }
    }

    setCartItems(newCart);
    if (removedItem) {
      toast.info(removedItem.title + ' removed from cart 🗑️');
    }
  }

  function increaseQuantity(productId) {
    let newCart = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === productId) {
        let item = cartItems[i];
        item = {
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category,
          thumbnail: item.thumbnail,
          quantity: item.quantity + 1
        };
        newCart.push(item);
      } else {
        newCart.push(cartItems[i]);
      }
    }
    setCartItems(newCart);
  }

  function decreaseQuantity(productId) {
    let newCart = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === productId && cartItems[i].quantity > 1) {
        let item = cartItems[i];
        item = {
          id: item.id,
          title: item.title,
          price: item.price,
          category: item.category,
          thumbnail: item.thumbnail,
          quantity: item.quantity - 1
        };
        newCart.push(item);
      } else {
        newCart.push(cartItems[i]);
      }
    }
    setCartItems(newCart);
  }

  function clearCart(showMsg) {
    setCartItems([]);
    if (showMsg) {
      toast.info('Cart cleared 🧹');
    }
  }

  let totalCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCount = totalCount + cartItems[i].quantity;
  }

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

        <Navbar cartCount={totalCount} />

        <main style={{ flexGrow: 1, paddingBottom: '40px' }}>
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/products" element={<Products products={products} loading={loading} error={error} onAddToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetails products={products} onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} onIncrease={increaseQuantity} onDecrease={decreaseQuantity} onRemove={removeFromCart} onClearCart={clearCart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        <ToastContainer position="bottom-right" autoClose={3000} />

      </div>
    </Router>
  );
}

export default App;
