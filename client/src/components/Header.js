import React, { Component } from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container container--header">
                <img src="../assets/img/logo.png" alt="flickspot logo" className="header__logo" />
                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <i className="fa fa-plus user-nav__icon" />
                    </div>
                    <div className="user-nav__icon-box">
                        <i className="fa fa-list user-nav__icon" />
                    </div>
                    <div className="user-nav__icon-box">
                        <i className="fa fa-calculator user-nav__icon" />
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;