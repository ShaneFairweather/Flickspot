import React from 'react';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {GithubLoginButton} from 'react-social-login-buttons';

const SignIn = () => {
    return (
        <div className="signin">
            <div className="container">
                <div className="signin__button-container">
                    <a href="/auth/google"><GoogleLoginButton className="signin__button" style={{maxWidth: '350px'}} /></a>
                    <a href="/auth/facebook"><FacebookLoginButton className="signin__button" style={{maxWidth: '350px'}} /></a>
                    <a href="/auth/github"><GithubLoginButton className="signin__button" style={{maxWidth: '350px'}} /></a>
                </div>
            </div>
        </div>
    )
};

export default SignIn;