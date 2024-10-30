import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = ({products}) => {

  return (
    <div>
        <h2 className='font-bold text-lg py-3'>Featured Products</h2>
        <div className='flex gap-5 m-auto w-[90%]'>
            {
                products?.map((product) =>{
                    return <ProductCard key ={product.id} product={product}/>
                })
            }
        </div>
    </div>
  )
}

export default FeaturedProducts