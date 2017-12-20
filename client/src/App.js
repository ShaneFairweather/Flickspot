import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/styles.css';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import ShowMovie from './components/ShowMovie';
import SignIn from './components/SignIn';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchFeaturedMovies();
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header />
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
                            exact
                            path="/signin"
                            render={(props) => (
                                <SignIn
                                    {...props}
                                    user={this.props.user}
                                />)}
                        />
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