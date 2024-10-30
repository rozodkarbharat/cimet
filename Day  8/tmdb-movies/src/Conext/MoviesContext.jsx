import { createContext, useEffect, useState } from "react";
import { getAllMovies, getAllTvSeries, getFilteredData, getGenres, getPopularMovies, getPopulatTvShows, getSingleMovieDetail, getTodayTrendingMovies, GetTopRatedMovies, GetTopRatedTvShows, getWeeksTrendingMovies, Search } from "./AllFuntions";
import { Moviescontext } from "../index";
import ExploreGrid from "../Components/ExploreGrid";


let MoviesType = {
  Trending: 0,
  Popular: 1,
  TopRated: 2
}



export const Moviesprovider = ({ children }) => {

  const [topRatedMovies, settopRatedMovies] = useState([])
  const [todayTrendingMovies, setTTodayrendingMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [weeksTrending, setWeeksTrending] = useState([])
  const [topRatedTvShows, setTopRatedTvShows] = useState([])
  const [popularTvShows, setpopularTvShows] = useState([])
  const [genres, setGenres] = useState([])
  const [currentType, setCurrentType] = useState(["day", "movie", "movie"])
  const [navbarTypeSelected, setnavbarTypeSelected] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [exloreData, setExploreData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [movieDetail,setmovieDetail]=useState({})



  function handleChangeType(type, buttonName) {

    if (buttonName == "week") {
      buttonName = "day"
    }
    else if (buttonName == "day") {
      buttonName = "week"
    }
    else if (buttonName == "movie") {
      buttonName = "tv show"
    }
    else {
      buttonName = "movie"
    }

    if (type) {
      let temparr =[ ...currentType]
      temparr[MoviesType[type]] = buttonName
      setCurrentType(() => temparr)
    }
  }

  async function handleEXplore(type) {
    let Allgenres = await getGenres()
    setGenres(() => Allgenres.data.genres)
    if (type == "movie") {
      setShowFilters(() => true)
      setnavbarTypeSelected(() => type)
      let movies = await getAllMovies()
      // console.log(movies, 'explore movies')
      setExploreData(() => movies.data.results)
      setFilteredData(() => movies.data.results)
    }
    else if (type == "tvshow") {
      setShowFilters(() => true)
      setnavbarTypeSelected(() => type)
      let tvshows = await getAllTvSeries()
      setExploreData(() => tvshows.data.results)
      setFilteredData(() => tvshows.data.results)
    }
    else {
      setnavbarTypeSelected(() => "")
      let searchResult = await Search(type)
      setExploreData(() => searchResult.data.results)
      setFilteredData(() => searchResult.data.results)
    }
  }

  function handleResetNavbarSelection(){
    setnavbarTypeSelected("")
  }

  async function GetllFromHome() {
    let topRatedMoviesresponse = await GetTopRatedMovies()
    let todayTrendingMovies = await getTodayTrendingMovies()
    let popularMoviesData = await getPopularMovies()
    let weeksTrendingMovies = await getWeeksTrendingMovies()
    let topRatedTvShows = await GetTopRatedTvShows()
    let popularTvShows = await getPopulatTvShows()
    let Allgenres = await getGenres()

    settopRatedMovies(() => topRatedMoviesresponse.data.results)
    setTTodayrendingMovies(() => todayTrendingMovies.data.results)
    setPopularMovies(() => popularMoviesData.data.results)
    setWeeksTrending(() => weeksTrendingMovies.data.results)
    setTopRatedTvShows(() => topRatedTvShows.data.results)
    setpopularTvShows(() => popularTvShows.data.results)
    setGenres(() => Allgenres.data.genres)
  }

  async function handleFilter(filters) {
    if(filters.length >0){

    
    let AllData =[...exloreData]
    let tempGenres =[...genres]
      let filterids = tempGenres.filter((elem)=>{
        if(filters.includes(elem.name)){
          return true
        }
        return false
      })
      let ids = filterids.map((elem)=>{
        return elem.id
      })
      
     AllData = AllData.filter((elem)=>{
      let genreids = elem.genre_ids
          for(let a = 0; a<ids.length ;a ++){
            if(genreids.includes(ids[a])){
              return elem
            }
          }
          return ""
     })
     setFilteredData(AllData)
    }else{
      setFilteredData(exloreData)
    }
  }

  function handleSort(sortBy) {
    if (sortBy === "asc") {
      let tempdata = [...filteredData]
      tempdata.sort((a, b) => a.popularity - b.popularity)

      setFilteredData(tempdata )
    }
    else {
      let tempdata = [...filteredData]
      tempdata.sort((a, b) => b.popularity - a.popularity)
      setFilteredData( tempdata)
    }
  }

  async function handleSingleMovieDetail({type,id}){
      let tempMoviDetail = await getSingleMovieDetail(type,id)
      console.log(tempMoviDetail,'tempdata')
      setmovieDetail(tempMoviDetail)
  }


  return <Moviescontext.Provider value={{ topRatedMovies, todayTrendingMovies, weeksTrending, popularMovies, topRatedTvShows, popularTvShows, genres, currentType, handleChangeType, handleFilter, handleSort, handleEXplore, exloreData, GetllFromHome, navbarTypeSelected, showFilters, filteredData, setFilteredData, handleResetNavbarSelection, handleSingleMovieDetail,movieDetail }} >{children}</Moviescontext.Provider>
}