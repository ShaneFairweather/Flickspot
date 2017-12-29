import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MovieCard from './MovieCard';

class ShowList extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchListMovies(id);
        console.log(this.props.listItems);
    }

    renderMovies() {
        const movies = this.props.listItems;
        if(movies) {
            console.log(movies.data);
            return movies.data.map((movie) => {
                return (
                    <MovieCard key={movie.id} movie={movie} />
                )
            });
        }
    }

    render() {
        return (
            <div className="show-list">
                <div>This is the show list</div>
                {this.renderMovies()}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        listItems: state.listItems
    }
}

export default connect(mapStateToProps, actions)(ShowList);