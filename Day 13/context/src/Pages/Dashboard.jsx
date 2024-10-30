import React from 'react'
import { useLoaderData } from 'react-router-dom'
import FeaturedProducts from '../Components/FeaturedProducts'
import Carousal from '../Components/Carousal'

const Dashboard = () => {
  const products = useLoaderData()

  return (
    <div>
      {/* <Carousal products={products}/> */}
      <FeaturedProducts products={products} />
    </div>
  )
}

export default Dashboard