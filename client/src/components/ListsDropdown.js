import React from 'react';
import { Link } from 'react-router-dom';

const ListDropdown = (props) => {
    const listsDropdownIsOpen = props.listsDropdownIsOpen ? "listContainerOpen" : "";
    const renderLists = () => {
        // console.log('rendering begins');
        if (props.lists) {
            const lists = props.lists.data;
            return lists.map(list => {
                if(list.movieIDs.includes(props.movie.id.toString())) {
                    return <div className="movie-details__list movie-details__list--disabled">{list.title}</div>
                } else {
                    return (
                        <div className="movie-details__list"
                             key={list._id}
                             itemID={list._id}
                             list={list}
                             onClick={(e) => props.addMovieToList(e)}
                        >
                            {list.title}
                        </div>
                    )
                }
            });
        }
    }


    return (
        <div className={"movie-details__list-container " + listsDropdownIsOpen}>
            Select a list to add to:
            {renderLists()}
            &nbsp;<br />
            <Link to="/create-list"><span className="movie-details__list-container__button"><i className="fa fa-plus"/>Create new list</span></Link>
        </div>
    )
};

export default ListDropdown;