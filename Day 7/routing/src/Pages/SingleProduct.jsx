import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import "../css/SingleProduct.css"

const SingleProduct = () => {

  const product = useLoaderData()

  return (
    <div className='product-box'>
      <img className='single-product-img' src={product.image} alt="" />
      <div className='product-detail-box'>
      <p className='single-product-title'>{product.title}</p>
      <p className='single-product-price'><b>Price</b> : ₹ {product.price}</p>
      <p className='single-product-description'>{product.description}</p>
      <div className='button-container'>
        <button className='add-to-cart-btn'>Add to Cart</button>
        <button className='buy-now-btn'>Buy Now</button>
      </div>
      </div>

    </div>
  )
}

export default SingleProduct