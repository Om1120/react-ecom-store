import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import '../css/Product.css';

function Products(props) {

  const [searchParams] = useSearchParams();

  let category = searchParams.get('category');
  if (!category) {
    category = 'all';
  }

  if (props.loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  if (props.error) {
    return (
      <div className="container" style={{ textAlign: 'center', margin: '40px auto' }}>
        <div className="error-view">
          <h3>Failed to load products</h3>
          <p>{props.error}</p>
        </div>
      </div>
    );
  }

  let list = [];
  for (let i = 0; i < props.products.length; i++) {
    let p = props.products[i];
    if (category === 'all') {
      list.push(p);
    } else if (p.category === category) {
      list.push(p);
    }
  }

  let title = 'All Products';
  if (category !== 'all') {
    title = category.replace(/-/g, ' ');
    title = title.charAt(0).toUpperCase() + title.slice(1);
  }

  return (
    <div className="container">

      <div style={{ margin: '20px 0 30px 0' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>
          {title}
        </h1>
        <p style={{ color: '#64748b', fontSize: '15px' }}>
          {list.length} products found
        </p>
      </div>

      <ProductList products={list} onAddToCart={props.onAddToCart} />

    </div>
  );
}

export default Products;
