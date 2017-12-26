import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import ShowMovie from './components/ShowMovie';
import ViewLists from './components/ViewLists';
import CreateList from './components/CreateList';
import ShowList from './components/ShowList';
import Footer from './components/Footer';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchFeaturedMovies();
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <div className="app__body">
                        <Header />
                        <div className="content">
                            <Searchbar />
                            <Route
                                exact
                                path="/"
                                render={(props) => (
                                    <Home
                                        {...props}
                                        featuredMovies={this.props.featuredMovies}
                                    />)}
                            />
                            <Route
                                exact
                                path="/movies/:id"
                                component={ShowMovie}
                            />
                            <Route
                                path="/create-list"
                                component={CreateList}
                            />
                            <Route
                                path="/view-lists"
                                component={ViewLists}
                            />
                            <Route
                                exact
                                path="/lists/:id"
                                component={ShowList}
                            />
                        </div>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        featuredMovies: state.featuredMovies
    }
}

export default connect(mapStateToProps, actions)(App);