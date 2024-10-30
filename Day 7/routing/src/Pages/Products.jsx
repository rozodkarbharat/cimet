import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'
import "../css/Products.css"
import Navbar from '../Components/Navbar'
import { useLoaderData } from 'react-router-dom'

function Products() {

 const data = useLoaderData()


  
    
  return (
    <div>
      <Navbar/>
    <div className='products-grid'>
        {
          data.length >0 &&data.map((elem)=>{
            return <Product key={elem.id} singleProductroduct={elem} />
          })
        }
    </div>
    </div>
  )
}

export default Products
