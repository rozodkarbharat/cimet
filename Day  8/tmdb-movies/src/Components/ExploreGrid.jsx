import React, { useContext, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Moviescontext } from '../index'
import "../Css/ExploreGrid.css"


const ExploreGrid = ({type}) => {
  const { filteredData , handleEXplore} = useContext(Moviescontext);


  useEffect(()=>{
    handleEXplore(type)
  },[type])

    return (
        <div className='explore-grid'>
            {filteredData.length > 0 ? (

                filteredData.map((elem, index) => (
                    <MovieCard key={index} movie={elem} />
                ))
            ) : (
                <p>No movies available</p> // Optional: Add a fallback UI
            )}
        </div>
    );
}

export default ExploreGrid