import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-black min-h-screen w-[100%] box-border overflow-x-hidden'>
        <Header />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Home