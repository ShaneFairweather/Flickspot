import React from 'react';

const Searchbar = () => {
    return (
        <form className="searchbar">
            <input
                type="search"
                className="searchbar__input"
                placeholder="Search films or shows"
            />
            <button className="searchbar__button">
                <i className="fa fa-search searchbar__icon" aria-hidden="true" />
            </button>
        </form>
    )
};

export default Searchbar;