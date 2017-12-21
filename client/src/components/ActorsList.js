import React from 'react'
import ActorCard from './ActorCard';

const ActorsList = ({actors}) => {
    const renderActorsList = () => {
        return actors.map((actor) => {
            return <ActorCard key={actor.id} actor={actor} />
        })
    };

    return (
        <div className="actors-section">
            <div className="container container--main">
                <h2 className="container__header">Cast</h2>
                <div className="actors-list">
                    {renderActorsList()}
                </div>
            </div>
        </div>
    )
};

export default ActorsList;