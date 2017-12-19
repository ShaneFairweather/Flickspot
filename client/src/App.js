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
import ViewFilm from './components/ViewFilm';
import SignIn from './components/SignIn';


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="searchbar-container">
                            <Searchbar />
                        </div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/show" component={ViewFilm}/>
                        <Route path="/signin" component={SignIn}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);