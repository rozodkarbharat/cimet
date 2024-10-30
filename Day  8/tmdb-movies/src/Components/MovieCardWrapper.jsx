import React, { useContext } from 'react'
import MovieCard from '../Components/MovieCard';
import { Moviescontext } from '../index';
import { Box, Typography } from '@mui/joy';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Css/MovieCardWrapper.css"

let buttons = {
    Trending: ["Day", "week"],
    Popular: ["Movie", "Tv Show"],
    TopRated: ["Movie", "Tv Show"],
}




const MovieCardWrapper = ({ sectionData, title, buttonName, type }) => {
    const data = useContext(Moviescontext)
    // console.log(sectionData, title , buttonName, type,buttons[type], 'sectiondata')

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
        <>
            <Box sx={{ width: "90%", boxSizing: "border-box", margin: "auto", padding: "5px 20px" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "1.8rem" }} >
                    <Typography sx={{ fontSize: "22px", textAlign: "left", marginBottom: "15px" }} textColor="#fff">
                        {title}
                    </Typography>
                    <div className='buttons-conatiner'>
                        {
                            type && buttons[type].map((elem, index) => {
                                return <p onClick={() => data.handleChangeType(type, buttonName)} key={index} style={buttonName == elem.toLowerCase() ? { backgroundColor: "green", color: "#fff" } : {}} >{elem}</p>
                            })
                        }
                    </div>
                </Box>

                <Slider {...settings}>
                    {
                        sectionData && data[sectionData] && data[sectionData].map((movie) => {
                            return <MovieCard key={movie.id} movie={movie} buttonName={buttonName} />
                        })
                    }
                </Slider>
            </Box>
        </>
    )
}

export default MovieCardWrapper
