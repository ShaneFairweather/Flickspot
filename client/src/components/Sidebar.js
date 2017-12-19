import React from 'react';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav__icon fa fa-envelope" />
                        <span>Movies</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav__icon fa fa-envelope" />
                        <span>Shows</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav-link">
                        <i className="side-nav__icon fa fa-envelope" />
                        <span>Home</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; 2017 Shane Fairweather
            </div>
        </nav>
    )
};

export default Sidebar;