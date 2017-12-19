import React from 'react';
import FeaturedMovies from './FeaturedMovies';
import FeaturedLists from './FeaturedLists';

const Home = () => {
    return (
        <div className="home">
            <FeaturedMovies />
            <FeaturedLists />
        </div>
    )
};

export default Home;