import React from 'react';
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className='p'>
      <div className="p-pad"></div>
      <a href='x' target='_blank'>
        <img alt='' src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'/>
      </a>
    </div>
  )
}

export default ProductCard