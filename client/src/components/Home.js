import React from 'react';
import FeaturedMovies from './FeaturedMovies';
import FeaturedLists from './FeaturedLists';

const Home = (props) => {
    return (
        <div className="home">
            <div className="container container--main">
                <FeaturedMovies movies={props.featuredMovies} />
                <FeaturedLists />
            </div>
        </div>
    )
};

export default Home;