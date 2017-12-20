import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchItem from './SearchItem';

class Searchbar extends Component {
    state = {
        queryString: ''
    };

    onSearchChange(e) {
        this.setState({queryString: e.target.value});
        this.props.fetchSearchResults(this.state.queryString);
    }

    renderSearchResults() {
        if(this.props.queryResults) {
            return (
                this.props.queryResults.results.map((movie) => {
                    return <SearchItem movie={movie} />
                })
            )
        }
    }

    resetSearch() {
        this.setState({ queryString: '' });
    }

    render() {
        return (
            <div className="searchbar-container">
                <form className="searchbar">
                    <input
                        type="search"
                        className="searchbar__input"
                        placeholder="Search films or shows"
                        value={this.state.queryString}
                        onChange={e => this.onSearchChange(e)}
                    />
                    <button className="searchbar__button">
                        <i className="fa fa-search searchbar__icon" aria-hidden="true"/>
                    </button>
                </form>
                <div className="searchbar-results">
                    <ul>{this.renderSearchResults()}</ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        queryResults: state.query
    };
}

export default connect(mapStateToProps, actions)(Searchbar);