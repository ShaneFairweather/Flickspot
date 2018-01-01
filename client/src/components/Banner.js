import React from 'react';
import { Link } from 'react-router-dom'

const Banner = (props) => {
    const renderBannerContent = () => {
        if(props.featuredMovies) {
            const movie = props.featuredMovies.results[0];
            return (
                <div>
                    <Link to={`/movies/${movie.id}`}>
                        <div className="banner" style={{backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url("http://image.tmdb.org/t/p/w1280//${movie.backdrop_path}")`, backgroundSize: 'cover'}}>
                            <div className="container container--main">
                                <div className="banner__header">Featured Movie</div>
                                <div className="banner__content">
                                    <div className="banner__title">{movie.original_title}</div>
                                    <div className="banner__overview">{movie.overview}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        }
    };

    return (
       <div>
           {renderBannerContent()}
       </div>
    )
};

export default Banner;