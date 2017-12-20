import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactStars from 'react-stars'

class ShowMovie extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id);
        this.props.fetchMovieById(id);
        // console.log(this.props.movie);
    }

    renderMovieDetails() {
        const movie = this.props.movie;
        if(movie) {
            return (
                <div className="movie-details" style={{backgroundImage: movie.backdrop_path}}>
                    <div className="movie-details__image">
                        <img className src={"http://image.tmdb.org/t/p/w342//" + movie.poster_path} alt="poster" />
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
                        <div className="movie-details__icon-row">
                            <ul>
                                <li>
                                    <i className="fa fa-plus"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container container--main">
                {this.renderMovieDetails()}
            </div>
        )
    }
};

function mapStateToProps(state) {
    console.log(state);
    return {
        movie: state.movie
    }
}

export default connect(mapStateToProps, actions)(ShowMovie);