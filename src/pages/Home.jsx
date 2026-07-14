import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Categories = () => {
  const navigate = useNavigate();

  const goToCategory = (name) => {
    navigate('/products?category=' + name);
  };

  const goToAll = () => {
    navigate('/products');
  };

  return (
    <div className="container">
      <div style={{ margin: '20px 0 30px 0' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
          Shop by Category
        </h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          Pick a category to see products.
        </p>
      </div>

      <button
        onClick={goToAll}
        style={{
          backgroundColor: '#4f46e5',
          color: '#ffffff',
          padding: '12px 28px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '700',
          cursor: 'pointer',
          marginBottom: '30px'
        }}
      >
        <i className="fa-solid fa-border-all" style={{ marginRight: '8px' }}></i>
        View All Products
      </button>

      {/* Written static categories layout - easy to edit, add, or change by hand */}
      <div className="categories-container">
        
        <button onClick={() => goToCategory('beauty')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
          <div className="category-name">Beauty & Makeup</div>
        </button>

        <button onClick={() => goToCategory('fragrances')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-spray-can-sparkles"></i></div>
          <div className="category-name">Fragrances</div>
        </button>

        <button onClick={() => goToCategory('furniture')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-couch"></i></div>
          <div className="category-name">Furniture</div>
        </button>

        <button onClick={() => goToCategory('groceries')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-basket-shopping"></i></div>
          <div className="category-name">Groceries</div>
        </button>

        <button onClick={() => goToCategory('home-decoration')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-house"></i></div>
          <div className="category-name">Home Decoration</div>
        </button>

        <button onClick={() => goToCategory('kitchen-accessories')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-utensils"></i></div>
          <div className="category-name">Kitchen</div>
        </button>

        <button onClick={() => goToCategory('laptops')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-laptop"></i></div>
          <div className="category-name">Laptops & Tech</div>
        </button>

        <button onClick={() => goToCategory('mens-shirts')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-shirt"></i></div>
          <div className="category-name">Men's Shirts</div>
        </button>

        <button onClick={() => goToCategory('mens-shoes')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-shoe-prints"></i></div>
          <div className="category-name">Men's Shoes</div>
        </button>

        <button onClick={() => goToCategory('mens-watches')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-clock"></i></div>
          <div className="category-name">Men's Watches</div>
        </button>

        <button onClick={() => goToCategory('mobile-accessories')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-plug"></i></div>
          <div className="category-name">Mobile Accessories</div>
        </button>

        <button onClick={() => goToCategory('motorcycle')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-motorcycle"></i></div>
          <div className="category-name">Motorcycles</div>
        </button>

        <button onClick={() => goToCategory('skin-care')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-face-smile"></i></div>
          <div className="category-name">Skin Care</div>
        </button>

        <button onClick={() => goToCategory('smartphones')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-mobile-screen-button"></i></div>
          <div className="category-name">Smartphones</div>
        </button>

        <button onClick={() => goToCategory('sports-accessories')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-dumbbell"></i></div>
          <div className="category-name">Sports</div>
        </button>

        <button onClick={() => goToCategory('sunglasses')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-glasses"></i></div>
          <div className="category-name">Sunglasses</div>
        </button>

        <button onClick={() => goToCategory('tablets')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-tablet-screen-button"></i></div>
          <div className="category-name">Tablets</div>
        </button>

        <button onClick={() => goToCategory('tops')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-person-dress"></i></div>
          <div className="category-name">Women Tops</div>
        </button>

        <button onClick={() => goToCategory('vehicle')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-car"></i></div>
          <div className="category-name">Vehicles</div>
        </button>

        <button onClick={() => goToCategory('womens-bags')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-bag-shopping"></i></div>
          <div className="category-name">Women's Bags</div>
        </button>

        <button onClick={() => goToCategory('womens-dresses')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-vest"></i></div>
          <div className="category-name">Women's Dresses</div>
        </button>

        <button onClick={() => goToCategory('womens-jewellery')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-gem"></i></div>
          <div className="category-name">Jewellery</div>
        </button>

        <button onClick={() => goToCategory('womens-shoes')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-shoe-prints"></i></div>
          <div className="category-name">Women's Shoes</div>
        </button>

        <button onClick={() => goToCategory('womens-watches')} className="category-card">
          <div className="category-icon"><i className="fa-solid fa-stopwatch"></i></div>
          <div className="category-name">Women's Watches</div>
        </button>

      </div>
    </div>
  );
};

export default Categories;
