import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShowList extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        this.props.fetchListMovies('5a418a1ea7c3360f44fe267d');
    }

    render() {
        return (
            <div className="">
                <div>This is the show list</div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        listMovies: state.listMovies
    }
}

export default connect(mapStateToProps, actions)(ShowList);