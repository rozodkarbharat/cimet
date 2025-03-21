import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { FaMinus, FaPlus } from "react-icons/fa";


const ProductCard = ({ product }) => {
  const { handleCartChange, cart } = useContext(ProductContext)
  const [count, setCount] = useState(0)
  useEffect(() => {
    let tempCart = [...cart]
    let cartElement = tempCart.filter((item) => item.id == product.id)
    if (cartElement.length > 0) {
      setCount(cartElement[0].quantity)
    }
    else{
      setCount(0)
    }
  }, [cart, handleCartChange])

  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
        <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={product.image} alt="product image" />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900 text-wrap">{product.title}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">${product.price}</span>
          </p>
          </div>
          {count == 0 && 
        <div onClick={() => handleCartChange(product, "add")} href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to cart</div>
          }
      { count > 0 &&
        <div className='flex gap-2'>
        <div onClick={() => handleCartChange(product, "add")} href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-3 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
          <FaPlus />
        </div>
        <p >{count}</p>
        <div onClick={() => handleCartChange(product, "reduce")} href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-3 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer">
          <FaMinus />
        </div>
      </div>
      }
      </div>
    </div>


  )
}

export default ProductCard