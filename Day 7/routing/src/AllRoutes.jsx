import React from 'react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import ProductsWrapper from './Pages/ProductsWrapper'
import Contact from './Pages/Contact'
import axios from 'axios'



async function fetchAllData(){
  let response = await axios('https://fakestoreapi.com/products')
  return response.data
}

async function fetchSingleData(e){
    let response = await axios(`https://fakestoreapi.com/products/${e.params.id}`)
  return response.data
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />
      }
      ,
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
  ,
  {
    path: "/products",
    element: <ProductsWrapper />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: fetchAllData
      },
      {
        path: ":id",
        element: <SingleProduct />,
        loader : (id)=> fetchSingleData(id)
      }
    ]
  },
])

const AllRoutes = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default AllRoutes