import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import {Link, useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';

  
const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }
    const getRandomItems = (arr, n) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };
  return (
    <div className ='movie-carousel-container'>
      <Carousel>
        
        {
            movies?.map((movie) =>{
                const selectedBackdrops = getRandomItems(movie.backdrops, 10);
                return(
                    <Paper key={movie.imdbId}>
                        <div className = 'movie-card-container'>
                            <div className="movie-card" style={{"--img": `url(${selectedBackdrops[0]})`}}>
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={movie.poster} alt="" />
                                    </div>
                                    <div className="movie-title">
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className="movie-buttons-container">
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                            <div className="play-button-icon-container">
                                            <FontAwesomeIcon className="play-button-icon"
                                                    icon = {faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)} >Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>

     
      <div>
        <h1>Films</h1>
      <ul className="movie-list">
                    {movies?.map((movie) => (
                        <li key={movie.imdbId} className="movie-item" onClick={() => navigate(`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`)}>
                            <img src={movie.poster} alt={movie.title} />
                            <div className="play-button">
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
      </div>
 
  )
}

export default Hero
