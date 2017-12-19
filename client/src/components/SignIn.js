import React from 'react';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {FacebookLoginButton} from 'react-social-login-buttons';
import {GithubLoginButton} from 'react-social-login-buttons';

const SignIn = () => {
    return (
        <div className="signin">
            <div className="container">
                <a href="/auth/google"><GoogleLoginButton /></a>
                <a href="/auth/facebook"><FacebookLoginButton /></a>
                <a href="/auth/github"><GithubLoginButton /></a>
            </div>
        </div>
    )
};

export default SignIn;