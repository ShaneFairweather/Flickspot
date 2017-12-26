import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = ({list}) => {
    const {title, movies, dateCreated, _id} = list;
    return (
        <Link to={`/lists/${_id}`}>
            <div className="list-card">
                <h2 className="list-card__title">{title}</h2>
                <h2 className="list-card__item-count">{movies.length} Titles</h2>
                <h2 className="list-card__date-created">Created {dateCreated.slice(3, dateCreated.length)}</h2>
            </div>
        </Link>
    )
};

export default ListCard;