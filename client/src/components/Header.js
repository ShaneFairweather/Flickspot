import React from 'react';
import Searchbar from './Searchbar';

const Header = () => {
    return (
        <header className="header">
            <img src="../assets/img/logo.png" alt="flickspot logo" className="header__logo" />
            <Searchbar />
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <i className="fa fa-calculator user-nav__icon" />
                </div>
                <div className="user-nav__icon-box">
                    <i className="fa fa-calculator user-nav__icon" />
                </div>
                <div className="user-nav__icon-box">
                    <i className="fa fa-calculator user-nav__icon" />
                </div>
            </nav>
        </header>
    )
};

export default Header;