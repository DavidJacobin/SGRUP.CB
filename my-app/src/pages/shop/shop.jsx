import React from 'react'
import {PRODUCTS} from '../../products'
import {Product} from '../shop/product'
import "./shop.css";

export const Shop = () => {
  return (
    <div className='shop'>
        
        <div className='row'>
            {PRODUCTS.map( (product) => <Product data={product} /> )}
        </div>
    </div>
  )
}
