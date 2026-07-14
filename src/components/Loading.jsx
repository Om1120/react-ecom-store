import React from 'react';

const Loading = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p style={{ color: '#64748b', fontWeight: 500 }}>Loading...</p>
    </div>
  );
};

export default Loading;
