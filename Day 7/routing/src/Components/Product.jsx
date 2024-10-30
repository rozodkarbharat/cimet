import React from 'react'
import "../css/Product.css"
import { useNavigate } from 'react-router-dom'

const Product = ({singleProductroduct}) => {

    const navigate = useNavigate()
    
    function handleclick(id){
        navigate(`/products/${id}`)
    }

  return (
    <div onClick={()=>handleclick(singleProductroduct.id)} className='single-product'>
        <img className='product-img' src={singleProductroduct.image} alt="" />
        <p>{singleProductroduct.title}</p>
        <p>Price : {singleProductroduct.price}</p>
    </div>
  )
}

export default Product