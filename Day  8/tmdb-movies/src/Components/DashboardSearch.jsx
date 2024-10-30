import React, { useContext, useState } from 'react'
import { Moviescontext } from '../index';
import "../Css/DashboardSearch.css"
import { useNavigate } from 'react-router-dom';

const DashboardSearch = () => {
    const [searchInput,setSearchInput] = useState()
    const { handleEXplore } = useContext(Moviescontext)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()  
        handleEXplore(searchInput)
        navigate(`/show/${searchInput}`)
    }

    return (
        <div className='hero-image'>
            <p className='hero-heading'>Welcome</p>
            <p className='hero-text'>Millions of movies, TV shows and people to discover. Explore now.</p>

                <form onSubmit={handleSubmit} className='search-container' action="">
                    <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} className='search-input' placeholder='Search for a movie or TV show' type="text" />
                    <button type='submit' className='search-btn'>Search</button>
                </form>

        </div>
    )
}

export default DashboardSearch