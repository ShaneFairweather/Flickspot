import { FETCH_FEATURED_MOVIES } from "../actions/actionTypes";

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_FEATURED_MOVIES:
            return action.payload || false;
        default:
            return state;
    }
};