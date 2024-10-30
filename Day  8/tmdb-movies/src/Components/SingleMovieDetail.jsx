import React, { useContext } from 'react'
import { Moviescontext } from '..'

const SingleMovieDetail = () => {
    const {movieDetail} = useContext(Moviescontext)

  return (
    <div>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} alt="" />
        </div>
        <div></div>
    </div>
  )
}

export default SingleMovieDetail