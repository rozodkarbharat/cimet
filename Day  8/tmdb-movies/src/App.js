import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { Moviescontext } from './Conext/MoviesContext';
import Home from './Pages/Home';
import { Route, Routes, useParams } from 'react-router-dom';
import ShowDetailed from './Pages/ShowDetailed';
import MoviDetail from './Pages/MoviDetail';




function App() {


  return (
    <div className="App" style={{background:"black",miHheight:"100vh"}}>
      <Routes>
        <Route path = '/' element ={<Home/>} />
        <Route path = "/show/:type" element={<ShowDetailed/>}/>
        <Route path = "/movie-detail/:type/:id" element={<MoviDetail/>}/>
      </Routes> 
        {/* <Home/> */}
    </div>
  );
}

export default App;
