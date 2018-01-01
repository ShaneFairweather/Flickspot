import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MovieCard from './MovieCard';

class ShowList extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchListMovies(id);
        this.props.fetchLists();
        // console.log(this.props.listItems);
    }

    // componentDidUpdate() {
    //     this.props.fetchLists();
    // }

    renderMovies() {
        const movies = this.props.listItems;
        if(movies) {
            console.log(movies.data);
            return movies.data.map((movie) => {
                console.log(movie);
                return (
                    <MovieCard key={movie.id} movie={movie} />
                )
            });
        }
    }

    renderUserDetails() {
        const listItems = this.props.listItems;
        if(listItems) {
            const userData = listItems.data[0];
            return (
                <div className="show-list__author">
                    <div>List by</div>
                    <div className="show-list__author__tag">
                        <img src={userData.imageURL} alt="profile pic" /><span>{userData.username}</span>
                    </div>
                </div>
            )

        }
    }

    renderListBackground() {
        if(this.props.listItems) {
            const firstMovieImage = this.props.listItems.data[0].banner_path;
            console.log(firstMovieImage);
            return (
                <div className="show-list__info" style={{backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("http://image.tmdb.org/t/p/w1280/${firstMovieImage}")`, backgroundSize: 'cover'}}>
                    {this.renderListInfo()}
                </div>
            )
        }
    }

    renderListInfo() {
        if(this.props.lists) {
            console.log('chceking lists');
            const listsToCheck = this.props.lists.data;
            const id = this.props.match.params.id;
            return listsToCheck.map((obj) => {
                if(obj._id === id) {
                    // console.log(obj);
                    return (
                            <div className="container container--main">
                                <div className="container__header">{obj.title}</div>
                                <div className="show-list__description">{obj.description}</div>
                                {this.renderUserDetails()}
                            </div>
                    )
                }
            });

        }
    }

    render() {
        return (
            <div className="show-list">
                {this.renderListBackground()}

                <div className="container container--main">
                    <div className="show-list__movies">
                        {this.renderMovies()}
                    </div>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        listItems: state.listItems,
        lists: state.lists
    }
}

export default connect(mapStateToProps, actions)(ShowList);