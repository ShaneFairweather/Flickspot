import React, { Component } from 'react';
import MovieCard from './MovieCard';

const FeaturedMovies = ({ movies }) => {
    const renderFeaturedMoviesList = () => {
        if(movies) {
            console.log(movies);
            return movies.results.map((movie) => {
                return (
                    <MovieCard id={movie.id} movie={movie} />
                )
            });
        }
    };

    return (
        <div className="container">
            <h2 className="container__header">Featured Movies</h2>
            <div className="featured-movies">
                <ul className="featured-movies__list">
                    {renderFeaturedMoviesList()}
                    </ul>
            </div>
        </div>
    )
};

export default FeaturedMovies;