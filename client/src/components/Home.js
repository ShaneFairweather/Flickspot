import React from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="searchbar-container">
                <Searchbar />
            </div>
        </div>
    )
};

export default Home;