import React from 'react';
import MovieCard from './MovieCard';

const FeaturedMovies = ({ movies }) => {
    const renderFeaturedMoviesList = () => {
        if(movies) {
            console.log(movies);
            return movies.results.slice(1, 11).map((movie) => {
                return (
                        <MovieCard key={movie.id} movie={movie} />
                )
            });
        }
    };

    return (
        <div className="featured-movies-container">
            <div className="container">
                <h2 className="container__header">Now Playing</h2>
                <div className="featured-movies">
                    <ul className="featured-movies__list">
                        {renderFeaturedMoviesList()}
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default FeaturedMovies;