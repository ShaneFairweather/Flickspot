import React from 'react';
import profilePic from '../assets/images/defaultpic.jpg';

const ActorCard = ({actor}) => {
    const renderProfileImage = () => {
        if(actor.profile_path === null) {
            return <img src={profilePic} alt="Profile pic" />
        } else {
            return <img src={"http://image.tmdb.org/t/p/w342//" + actor.profile_path} alt="Profile pic" />
        }
    };

    return (
        <div className="actor-card">
            <div className="actor-card__image">
                {renderProfileImage()}
            </div>
            <div className="actor-card__content">
                <div className="actor-card__name">
                    {actor.name}
                </div>
                <div className="actor-card__character">
                    {actor.character}
                </div>
            </div>
        </div>
    )
}

export default ActorCard;