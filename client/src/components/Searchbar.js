import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SearchItem from './SearchItem';

class Searchbar extends Component {
    state = {
        queryString: '',
        resultsVisible: false
    };

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = e => {
        this.setState({ resultsVisible: false })
    }

    onSearchChange(e) {
        this.setState({
            queryString: e.target.value,
            resultsVisible: true
        }, () => {
            this.props.fetchSearchResults(this.state.queryString);
            if(this.state.queryString === '') {
                this.setState({resultsVisible: false})
            }
        });
    }

    resetSearch = () => {
        this.setState({ queryString: '' });
    }

    renderSearchResults() {
        if(this.props.queryResults) {
            return (
                this.props.queryResults.results.map((movie) => {
                    return <SearchItem
                        key={movie.id}
                        movie={movie}
                        resetSearch={this.resetSearch}
                    />
                })
            )
        }
    }

    render() {
        const resultsVisible = this.state.resultsVisible ? "open" : "";
        return (
            <div className="searchbar-container">
                <form className="searchbar" >
                    <input
                        type="search"
                        className="searchbar__input"
                        placeholder="Search for a movie"
                        value={this.state.queryString}
                        onChange={e => this.onSearchChange(e)}
                    />
                    <i className="fa fa-search searchbar__icon" aria-hidden="true"/>
                </form>
                <div className={"searchbar-results " + resultsVisible}>
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