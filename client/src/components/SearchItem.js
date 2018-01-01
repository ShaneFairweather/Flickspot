import React from 'react';
import { Link } from 'react-router-dom';
import posterPic from '../assets/images/default_poster.jpg';

const SearchResult = (props) => {
    const { movie } = props;
    const renderProfileImage = () => {
        if(movie.poster_path === null) {
            return <img src={posterPic} alt="Search result poster"/>
        } else {
            return <img src={"http://image.tmdb.org/t/p/w154//" + movie.poster_path} alt="Search result poster"/>
        }
    };

    return (
        <li className="searchbar-result" onClick={props.resetSearch}>
            <Link to={`/movies/${movie.id}`}>
                <div className="searchbar-result__image">
                    {renderProfileImage()}
                </div>
                <div className="searchbar-result__content">
                    <div className="searchbar-result__title">{movie.original_title} <span className="searchbar-result__year">({movie.release_date.slice(0, 4)})</span></div>
                    <div className="searchbar-result__actors">{movie.overview.slice(0, 150) + '...'}</div>
                </div>
            </Link>
        </li>

    )
};

export default SearchResult;