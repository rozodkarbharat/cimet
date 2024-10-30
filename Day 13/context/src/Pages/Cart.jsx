import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import ProductCard from '../Components/ProductCard'

const Cart = () => {
  const [total,setTotalcart ]=useState(0)
  const { cart } = useContext(ProductContext)
  useEffect(()=>{
    let totalCart = [...cart]
    let totalPrice = totalCart.reduce((acc, curr) => acc + curr.price*curr.quantity, 0)
    setTotalcart(totalPrice)
  },[Cart])
  return (
    <div className='flex pt-10 justify-between w-[90%] m-auto'>
      <div>
        {
          cart.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </div>
      <div className=' w-[300px] pt-24'>
          <div className='bg-gray-200 min-h-20 '>
            <div className='flex justify-between h-10 p-4 font-bold '>
              <p>Name</p>
              <p>Qty</p>
              <p>Total</p>
            </div>
            {
              cart.map((product) => {
                return <div className='flex justify-between h-10 p-4'>
                  <p>{product.title.split(" ").splice(0,2).join(" ")}</p>
                  <p>{product.quantity}</p>
                  <p>{product.quantity*product.price}</p>
                </div>
              })
            }
           
            <div className='h-0.5 bg-gray-300 w-[100%] m-auto my-3'></div>
            <div className='flex justify-between h-10 p-4'>
              <p></p>
              <p></p>
              <p className='font-bold'>Total</p>
            </div>
            <div className='flex justify-between h-10 p-4 mp-4 pb-2.5'>
              <p></p>
              <p></p>
              <p>{total}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart