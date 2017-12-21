import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactStars from 'react-stars'
import ActorsList from './ActorsList';

class ShowMovie extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchMovieById(id);
    }

    componentDidUpdate() {
        const id = this.props.match.params.id;
        this.props.fetchMovieById(id);
    }

    renderTrailer() {
        const movie = this.props.movie;
        if(movie.videos.results[0]) {
            return (
                <li>
                    <a className="movie-details__icon-box"
                       href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}><i
                        className="fa fa-play movie-details__icon"/></a>
                </li>
            )
        }
    }

    renderMovieDetails() {
        const movie = this.props.movie;
        if(movie) {
            return (
                <div>
                    <div className="movie-details" style={{backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url("http://image.tmdb.org/t/p/w780//${movie.backdrop_path}")`, backgroundSize: 'cover'}}>
                        <div className="movie-details__banner" style={{backgroundImage: `url("http://image.tmdb.org/t/p/w500//${movie.backdrop_path}")`}}>
                            {/*<img src={"http://image.tmdb.org/t/p/w500//" + movie.backdrop_path} alt="poster" />*/}
                        </div>
                        <div className="container container--main">
                            <div className="movie-details__container--mobile">
                                <div className="movie-details__header">
                                    <div className="movie-details__image">
                                        <img src={"http://image.tmdb.org/t/p/w342//" + movie.poster_path} alt="poster" />
                                    </div>
                                    <div className="movie-details__header__content">
                                        <h2 className="movie-details__header__title">{movie.original_title}<span className="movie-details__header__year"> ({movie.release_date.slice(0, 4)})</span></h2>
                                        {/*<div className="movie-details__score">{movie.vote_average}</div>*/}
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color2={'#805be7'}
                                            value={movie.vote_average / 2}
                                            edit={false}
                                        />
                                        <ul className="movie-details__icon-row">
                                            <li className="movie-details__icon-box">
                                                <i className="fa fa-list movie-details__icon" />
                                            </li>
                                            {this.renderTrailer()}
                                        </ul>
                                    </div>
                                </div>
                                <p className="movie-details__overview">{movie.overview}</p>
                            </div>

                            <div className="movie-details__container">
                                <div className="movie-details__image">
                                    <img src={"http://image.tmdb.org/t/p/w342//" + movie.poster_path} alt="poster" />
                                </div>
                                <div className="movie-details__content">
                                    <h2 className="container__header movie-details__title">{movie.original_title}<span className="movie-details__year"> ({movie.release_date.slice(0, 4)})</span></h2>
                                    {/*<div className="movie-details__score">{movie.vote_average}</div>*/}
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        color2={'#805be7'}
                                        value={movie.vote_average / 2}
                                        edit={false}
                                    />
                                    <p className="movie-details__overview">{movie.overview}</p>
                                    <ul className="movie-details__icon-row">
                                        <li className="movie-details__icon-box">
                                            <i className="fa fa-list movie-details__icon" />
                                        </li>
                                        {this.renderTrailer()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActorsList actors={movie.credits.cast}/>
                </div>
            )
        }
    }

    render() {
        return (
            <section className="show-movie">
                {this.renderMovieDetails()}
            </section>
        )
    }
};

function mapStateToProps(state) {
    // console.log(state);
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, actions)(ShowMovie);