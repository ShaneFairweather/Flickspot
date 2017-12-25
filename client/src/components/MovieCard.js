import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    return (
        <li className="movie-card">
            <Link to={`/movies/${movie.id}`}>
            <img src={"http://image.tmdb.org/t/p/w342//" + movie.poster_path} alt="Poster" />
            {/*<div>{movie.original_title}</div>*/}
            </Link>
        </li>
    )
};

export default MovieCard;