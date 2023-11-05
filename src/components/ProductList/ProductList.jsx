import React from 'react'
import './ProductList.css'
import ProductCard from '../ProductCards/ProductCard'

function ProductList() {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Projects</h1>
            <p className="pl-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cupiditate, quasi sapiente assumenda eos sequi numquam quia veniam, earum sint unde eligendi voluptatum tempore harum, ipsam velit aspernatur sit.</p>
            <ul className='stack-list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>JS</li>
              <li>Typescript</li>
              <li>NodeJS</li>
              <li>C</li>
              <li>Python</li>
              <li>Vim</li>
              <li>Git</li>
              <li>Agile</li>
              <li>JQuery</li>
              <li>React</li>
              <li>More Here</li>
              <li>More Here</li>
              <li>More Here</li>
              <li>More Here</li>
            </ul>
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