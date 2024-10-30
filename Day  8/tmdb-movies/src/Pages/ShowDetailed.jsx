import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useParams } from 'react-router-dom'
import { Moviescontext } from '../index'
import ExploreGrid from '../Components/ExploreGrid'
import SortFilter from '../Components/SortFilter'
import { getAllMovies, getAllTvSeries, getGenres, Search } from '../Conext/AllFuntions'
import Footer from '../Components/Footer'

const ShowDetailed = () => {
  const [CurrentPage, setCurrentPage] = useState(1)
  const params = useParams()


  const handleScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("scrolled")
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Navbar />
      <SortFilter type={params.type} />
      <ExploreGrid type={params.type} />
      <Footer />
    </div>
  )
}

export default ShowDetailed