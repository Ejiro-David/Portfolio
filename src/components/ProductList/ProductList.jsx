import React from 'react'
import './ProductList.css'
import ProductCard from '../ProductCards/ProductCard'

function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate, quasi sapiente assumenda eos sequi numquam quia veniam, earum sint unde eligendi voluptatum tempore harum, ipsam velit aspernatur sit.</p>
        </div>
        <div className="pl-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default ProductList