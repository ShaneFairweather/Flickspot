import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {

        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <Link to="/signin">Login</Link>
                        </div>
                    </nav>
                );
            default:
                const { username, imageURL } = this.props.auth;
                return (
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <i className="fa fa-plus user-nav__icon"/>
                        </div>
                        <div className="user-nav__icon-box">
                            <i className="fa fa-list user-nav__icon"/>
                        </div>
                        <div className="user-nav__icon-box">
                            <div className="user-nav__profile">
                                <img src={imageURL} alt="User icon" />
                            </div>
                            {/*<span>{username}</span>*/}
                        </div>
                    </nav>
                )
        }
    }

    render() {
        return (
            <header className="header">
                <div className="container container--header">
                    <img src="../assets/img/logo.png" alt="flickspot logo" className="header__logo"/>
                    {this.renderContent()}
                </div>
            </header>
        )
    }
};

function mapStateToProps({ auth }) {
    console.log({ auth });
    return { auth }
}

export default connect(mapStateToProps, null)(Header);