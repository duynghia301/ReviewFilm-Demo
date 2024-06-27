import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
import Login from './components/Login/LoginForm';
import Register from './components/register/Register';
import Footer from './components/footer/footer';
import React from 'react';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const [searchValue,setSearchValue]=useState('');



  
  const getMovies = async () =>{
    try
    {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } 
    catch(err)
    {
      console.log(err);
    }
  }

  
  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }  
  useEffect(() => {
    getMovies();
    getUsers();
  },[])

  const getUsers =async()=>{
    
    try
    {
      const response = await api.get("/api/v1/users");
    } 
    catch(err)
    {
      console.log(err);
    }
  }
  
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home movies={movies} />} ></Route>
            <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
            <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>     
            <Route path="/login" element = {<Login/>}></Route>
            <Route path="/register" element = {<Register/>}></Route>
        </Route>
      </Routes>
      <Footer/>
      
    </div>
    
  );
}

export default App;
