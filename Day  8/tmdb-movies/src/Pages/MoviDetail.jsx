import { colors } from '@mui/joy'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Moviescontext } from '..'
import SingleMovieDetail from '../Components/SingleMovieDetail'

const MoviDetail = () => {
    const {movieDetail, handleSingleMovieDetail} = useContext(Moviescontext)
    const params = useParams()
    console.log(movieDetail,'detail')
    useEffect(()=>{
        handleSingleMovieDetail(params)
    },[params])

    return (
    <div style={{color:"#fff"}}>
        <SingleMovieDetail/>
    </div>
  )
}

export default MoviDetail