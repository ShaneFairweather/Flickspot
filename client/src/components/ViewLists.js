import React, { Component } from 'react';
import ListCard from './ListCard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ViewLists extends Component {
    componentDidMount() {
        this.props.fetchLists();
    }

    renderLists() {
        console.log('rendering begins');
        if (this.props.lists) {
            const lists = this.props.lists.data;
            console.log(lists.length);
            return lists.map(list => <ListCard key={list._id} list={list}/>);
        }
    }

    render() {
        return (
            <div className="view-lists">
                <div className="container container--main">
                    <div className="container__header">My Lists</div>
                    <ul className="view-lists__ul">{this.renderLists()}</ul>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps, actions)(ViewLists);