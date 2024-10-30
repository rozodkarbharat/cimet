import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'

const Products = () => {
    const products = useLoaderData()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[90%] m-auto pt-10">
        {
            products?.map((product) => {
                return <ProductCard product={product} key={product.id}/>
            })
        }
    </div>
  )
}

export default Products