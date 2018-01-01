import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const renderMovieDetails = () => {
        if(movie) {
            return (
                <Link to={`/movies/${movie.id}`}>
                    <img src={"http://image.tmdb.org/t/p/w342/" + movie.poster_path} alt="Poster"/>
                    {/*<div>{movie.original_title}</div>*/}
                </Link>
            )
        }
    }

    return (
        <li className="movie-card">
            {renderMovieDetails()}
        </li>
    )
};

export default MovieCard;