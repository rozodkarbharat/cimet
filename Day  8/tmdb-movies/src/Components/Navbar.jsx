import React, { useContext } from 'react'
import "../Css/Navbar.css"
import { useNavigate } from 'react-router-dom'
import { Moviescontext } from '../index'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const {navbarTypeSelected, handleResetNavbarSelection} = useContext(Moviescontext)
    const navigate = useNavigate()

    function handlePageChange(type){
        navigate(`/show/${type}`)
    }   
    function handleNavigateToHome(){
      navigate("/")
      handleResetNavbarSelection()
      
    }
  return (
    <div className='navbar'>
           <div className='navbar-left'>
              <p onClick={handleNavigateToHome}>MovieApp</p>  
           </div>
           <div className="navbar-right">
                <button style={navbarTypeSelected=="movie"?{color:"red"}:{}} onClick={()=>handlePageChange("movie")}>Movies</button>
                <button style={navbarTypeSelected=="tvshow"?{color:"red"}:{}} onClick={()=>handlePageChange("tvshow")}>Tv Shows</button>
                <SearchIcon className='search-icon' />
            </div>   
    </div>
  )
}

export default Navbar