import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = { isOpen: false };

    handleDropdownSelect = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

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
                const dropdownStatus = this.state.isOpen ? "open" : "";
                return (
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <i className="fa fa-plus user-nav__icon"/>
                        </div>
                        <div className="user-nav__icon-box">
                            <i className="fa fa-list user-nav__icon"/>
                        </div>
                        <div className="user-nav__icon-box">
                            <div
                                onClick={this.handleDropdownSelect}
                                className="user-nav__profile">
                                <img src={imageURL} alt="User icon" />
                            </div>
                        </div>
                        <ul className={"user-nav__dropdown " + dropdownStatus}>
                            <li className="user-nav__dropdown__item user-nav__dropdown__item--header">{username}</li>
                            <li><a className="user-nav__dropdown__item">Lists</a></li>
                            <li><a className="user-nav__dropdown__item">Edit Profile</a></li>
                            <li><a className="user-nav__dropdown__item user-nav__dropdown__item--footer" href="/api/logout">Logout</a></li>
                        </ul>
                    </nav>
                )
        }
    }

    render() {
        return (
            <header className="header">
                <div className="container container--navbar">
                    {/*<img src="../assets/img/logo.png" alt="flickspot logo" className="header__logo"/>*/}
                    <Link to="/">Flickspot</Link>
                    {this.renderContent()}
                </div>
            </header>
        )
    }
};

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps, null)(Header);