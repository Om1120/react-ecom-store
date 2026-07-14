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

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=0')
      .then(res => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch(err => {
        setError('Something went wrong. Try again.');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qty = 1) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      ));
      toast.success(`${product.title} quantity updated! 🛒`);
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        title: product.title,
        price: product.price,
        category: product.category,
        thumbnail: product.thumbnail,
        quantity: qty
      }]);
      toast.success(`${product.title} added to cart! 🛒`);
    }
  };

  const removeFromCart = (productId) => {
    const removedItem = cartItems.find(item => item.id === productId);
    setCartItems(cartItems.filter(item => item.id !== productId));
    if (removedItem) {
      toast.info(`${removedItem.title} removed from cart 🗑️`);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQuantity = (productId) => {
    setCartItems(cartItems.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const clearCart = (showMsg) => {
    setCartItems([]);
    if (showMsg) {
      toast.info('Cart cleared 🧹');
    }
  };

  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar cartCount={totalCount} />

        <main style={{ flexGrow: 1, paddingBottom: '40px' }}>
          <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/products" element={
              <Products 
                products={products} 
                loading={loading} 
                error={error} 
                onAddToCart={addToCart} 
              />
            } />
            <Route path="/products/:id" element={
              <ProductDetails 
                products={products} 
                onAddToCart={addToCart} 
              />
            } />
            <Route path="/cart" element={
              <Cart 
                cartItems={cartItems} 
                onIncrease={increaseQuantity} 
                onDecrease={decreaseQuantity} 
                onRemove={removeFromCart} 
                onClearCart={clearCart} 
              />
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </Router>
  );
};

export default App;
