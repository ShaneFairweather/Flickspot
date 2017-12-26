import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/fslogo.png';
import Searchbar from './Searchbar';
import SocialButton from './SocialButton';

class Header extends Component {
    state = { isOpen: false };

    handleDropdownSelect = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.state.isOpen)
    };

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = () => {
        this.setState({ isOpen: false })
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                const loginDropdownStatus = this.state.isOpen ? "open" : "";
                return (
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <div
                                onClick={this.handleDropdownSelect}
                                className="user-nav__login">Login</div>
                        </div>
                        <ul className={"user-nav__dropdown user-nav__dropdown--login " + loginDropdownStatus}>
                            <li><SocialButton brand="google" icon="google" color="#cb3f23" hover="#a5331c" /></li>
                            <li><SocialButton brand="facebook" icon="facebook-official" color="#3c5898" hover="#293e69"/></li>
                            <li><SocialButton brand="github" icon="github" color="#333333" hover="#555555"/></li>
                        </ul>
                    </nav>
                );
            default:
                const { username, imageURL } = this.props.auth;
                const dropdownStatus = this.state.isOpen ? "open" : "";
                return (
                    <nav className="user-nav">
                        <div className="user-nav__icon-box">
                            <Link to="/create-list">
                                <i className="fa fa-plus user-nav__icon"/>
                            </Link>
                        </div>
                        <div className="user-nav__icon-box">
                            <Link to="/view-lists">
                                <i className="fa fa-list user-nav__icon"/>
                            </Link>
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
                    <div className="header__brand">
                        <Link to="/">
                            <img src={Logo} alt="flickspot logo" className="header__logo"/>
                            <div className="header__title">Flickspot</div>
                        </Link>
                    </div>
                    <Searchbar />
                    {this.renderContent()}
                </div>
                <div className="sidebar">
                </div>
            </header>
        )
    }
};

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps, null)(Header);