import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from '../Context/ProductContext';
import axios from 'axios';


const Header = () => {
  const { cart } = useContext(ProductContext) 
  const [currenecy,setCurrency]=useState("USD")

  useEffect(() =>{
    async function fetchCurrency() {
      try{
        let data = await axios.get("https://v6.exchangerate-api.com/v6/7f239aeb5d43c5b7ae4a7e43/latest/USD")
        console.log(data,"data")
      }
      catch(err){
        console.log(err)  
      }
    }
    fetchCurrency()
  },[])  
  return (
    <div className='fixed w-[100%] z-10'>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
          </Link>
          <div className="hidden w-full md:block md:w-auto" >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className='flex gap-2'>
                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select currency</label>
                <select onChange={(e)=>setCurrency(e.target.value)} value={currenecy} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="USD">US Dollar</option>
                  <option value="AUD">Australian Dollar</option>
                  <option value="RS">Indian Rupee</option>

                </select>
              </li>
              <li>
                <Link to="/products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Products</Link>
              </li>
              <li>
                <Link to="/blogs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blogs</Link>
              </li>
              <li>
                <Link to="/cart" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex"><FaShoppingCart className='w-6 h-6' />({cart.length})</Link>
              </li>
              {/* <li>
                <Link to = "" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header