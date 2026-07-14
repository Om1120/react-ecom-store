import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import '../css/Product.css';

const Products = ({ products, loading, error, onAddToCart }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || 'all';

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ textAlign: 'center', margin: '40px auto' }}>
        <div className="error-view">
          <h3>Failed to load products</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Filter products by category (simple filter method instead of verbose loop)
  const filteredList = category === 'all'
    ? products
    : products.filter(p => p.category === category);

  // Simple title generator
  const title = category === 'all'
    ? 'All Products'
    : category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="container">
      <div style={{ margin: '20px 0 30px 0' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>
          {title}
        </h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          {filteredList.length} products found
        </p>
      </div>

      <ProductList products={filteredList} onAddToCart={onAddToCart} />
    </div>
  );
};

export default Products;
