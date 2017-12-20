import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = (props) => {
    const { movie } = props;
    return (
        <li className="searchbar-result">
            <div className="container">
                <Link to={`/movies/${movie.id}`}>
                    <div className="searchbar-result__image">
                        <img src={"http://image.tmdb.org/t/p/w154//" + movie.poster_path} />
                    </div>
                    <div className="searchbar-result__content">
                        <div className="searchbar-result__title">{movie.name}</div>
                    </div>
                </Link>
            </div>
        </li>
    )
};

export default SearchResult;