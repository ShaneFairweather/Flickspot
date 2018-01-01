import React from 'react';
import FeaturedMovies from './FeaturedMovies';
import FeaturedLists from './FeaturedLists';
import Banner from './Banner';

const Home = (props) => {
    return (
        <div className="home">
            <Banner featuredMovies={props.featuredMovies} />
            <div className="container container--main">
                <FeaturedMovies movies={props.featuredMovies} />
            </div>
        </div>
    )
};

export default Home;