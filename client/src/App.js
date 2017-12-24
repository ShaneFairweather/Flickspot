import React, { Component } from 'react';
import logo from './logo.svg';
import {FacebookLoginButton} from 'react-social-login-buttons';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import ShowMovie from './components/ShowMovie';
import SignIn from './components/SignIn';
import CreateList from './components/CreateList';
import Footer from './components/Footer';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        console.log('test');
        this.props.fetchFeaturedMovies();
    }

    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <div className="app__body">
                        <Header />
                        {/*<div className="content">*/}
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
                                exact
                                path="/signin"
                                render={(props) => (
                                    <SignIn
                                        {...props}
                                        user={this.props.user}
                                    />)}
                            />
                        {/*</div>*/}
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