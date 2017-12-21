import { FETCH_MOVIE_BY_ID } from "../actions/actionTypes";

export default function(state = null, action) {
    // console.log(action);
    switch(action.type) {
        case FETCH_MOVIE_BY_ID:
            return action.payload || false;
        default:
            return state;
    }
};