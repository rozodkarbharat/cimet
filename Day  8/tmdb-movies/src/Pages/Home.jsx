import React, { useContext, useEffect } from 'react'
import { Moviescontext } from '../index';
import MovieCardWrapper from '../Components/MovieCardWrapper';
import DashboardSearch from '../Components/DashboardSearch';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


let Types = {
    Trending: {
        day: "todayTrendingMovies",
        week: "weeksTrending",
        title: "Trending"
    },
    Popular: {
        movie: "popularMovies",
        tvshow: "popularTvShows",
        title: "What's Popular"
    },
    TopRated: {
        movie: "topRatedMovies",
        tvshow: "topRatedTvShows",
        title: "Top Rated"
    }
}


const Home = () => {
    const { currentType, GetllFromHome } = useContext(Moviescontext)

    useEffect(()=>{
        GetllFromHome()
    },[currentType])

    return (
        <>
        <Navbar/>
            <DashboardSearch/>  
            <>
            {
                Object.keys(Types).map((type, index) => {

                    let sectionData = Types[type][currentType[index].split(" ").join("")] || ""
                    return <MovieCardWrapper type ={type} buttonName ={currentType[index]} key={index} title={Types[type].title} sectionData={sectionData} />
                })
            }
            <Footer/>
            </>
        </>
    )
}

export default Home