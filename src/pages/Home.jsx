import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

// list of all categories we want to show
let categories = [
  { name: "beauty", label: "Beauty & Makeup", icon: "fa-solid fa-wand-magic-sparkles" },
  { name: "fragrances", label: "Fragrances", icon: "fa-solid fa-spray-can-sparkles" },
  { name: "furniture", label: "Furniture", icon: "fa-solid fa-couch" },
  { name: "groceries", label: "Groceries", icon: "fa-solid fa-basket-shopping" },
  { name: "home-decoration", label: "Home Decoration", icon: "fa-solid fa-house" },
  { name: "kitchen-accessories", label: "Kitchen", icon: "fa-solid fa-utensils" },
  { name: "laptops", label: "Laptops & Tech", icon: "fa-solid fa-laptop" },
  { name: "mens-shirts", label: "Men's Shirts", icon: "fa-solid fa-shirt" },
  { name: "mens-shoes", label: "Men's Shoes", icon: "fa-solid fa-shoe-prints" },
  { name: "mens-watches", label: "Men's Watches", icon: "fa-solid fa-clock" },
  { name: "mobile-accessories", label: "Mobile Accessories", icon: "fa-solid fa-plug" },
  { name: "motorcycle", label: "Motorcycles", icon: "fa-solid fa-motorcycle" },
  { name: "skin-care", label: "Skin Care", icon: "fa-solid fa-face-smile" },
  { name: "smartphones", label: "Smartphones", icon: "fa-solid fa-mobile-screen-button" },
  { name: "sports-accessories", label: "Sports", icon: "fa-solid fa-dumbbell" },
  { name: "sunglasses", label: "Sunglasses", icon: "fa-solid fa-glasses" },
  { name: "tablets", label: "Tablets", icon: "fa-solid fa-tablet-screen-button" },
  { name: "tops", label: "Women Tops", icon: "fa-solid fa-person-dress" },
  { name: "vehicle", label: "Vehicles", icon: "fa-solid fa-car" },
  { name: "womens-bags", label: "Women's Bags", icon: "fa-solid fa-bag-shopping" },
  { name: "womens-dresses", label: "Women's Dresses", icon: "fa-solid fa-vest" },
  { name: "womens-jewellery", label: "Jewellery", icon: "fa-solid fa-gem" },
  { name: "womens-shoes", label: "Women's Shoes", icon: "fa-solid fa-shoe-prints" },
  { name: "womens-watches", label: "Women's Watches", icon: "fa-solid fa-stopwatch" },
];

function Categories() {

  // useNavigate lets us go to another page in code
  const navigate = useNavigate();

  // go to products page and filter by the clicked category
  function goToCategory(name) {
    navigate('/products?category=' + name);
  }

  // go to products page with no filter (show everything)
  function goToAll() {
    navigate('/products');
  }

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

      {/* button to show all products */}
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

      {/* loop through categories and make a button for each one */}
      <div className="categories-container">
        {categories.map(function(cat) {
          return (
            <button
              key={cat.name}
              onClick={function() { goToCategory(cat.name); }}
              className="category-card"
            >
              <div className="category-icon">
                <i className={cat.icon}></i>
              </div>
              <div className="category-name">{cat.label}</div>
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default Categories;
