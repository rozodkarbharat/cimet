import axios from "axios";
// require('dotenv').config()

export async function GetTopRatedMovies(){
   let response = await axios.get("https://api.themoviedb.org/3/movie/top_rated",{
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}

export async function GetTopRatedTvShows(){
    let response = await axios.get("https://api.themoviedb.org/3/tv/top_rated",{
         headers: {
             accept: 'application/json',
             'content-type': 'application/json',
             Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
           }
     })
     return response
 }

export async function getTodayTrendingMovies(){
    let response = await axios.get("https://api.themoviedb.org/3/trending/all/day",{
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}


export async function getWeeksTrendingMovies(){
    let response = await axios.get("https://api.themoviedb.org/3/trending/all/week",{
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}


export async function getPopularMovies(){
    let response = await axios.get("https://api.themoviedb.org/3/movie/popular",{
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}

export async function getPopulatTvShows(){
    let response = await axios.get("https://api.themoviedb.org/3/tv/popular",{
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}

export async function Search(query){

    let response = await axios(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}


export async function getGenres(query){
    let response = await axios(`https://api.themoviedb.org/3/genre/movie/list`, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}


export async function getAllMovies(){
    
    let response = await axios(`https://api.themoviedb.org/3/discover/movie`, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}


export async function getAllTvSeries(){
    
    let response = await axios(`https://api.themoviedb.org/3/discover/tv`, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response
}


export async function getSingleMovieDetail(type,id){
    console.log(type,id,'api')
    let response = await axios(`https://api.themoviedb.org/3/${type}/${id}`, {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTVjMjc1OTc4MzRiNGIwZTQxZDgyOGJmZTBiZmZlOCIsIm5iZiI6MTcyNzI1ODcxOC42OTU1MTIsInN1YiI6IjY2ZjNkZWE4MzM4MzU3YzcwYTY5ZjFhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37Fm2xdleu6UkTGsHMa7kPGagbzv2JIhFj4DPmcUnRc"
          }
    })
    return response.data
}
