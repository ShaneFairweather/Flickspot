import {FETCH_LIST_MOVIES, FETCH_LISTS} from "../actions/actionTypes";

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_LISTS:
            return action.payload || false;
        case FETCH_LIST_MOVIES:
            return action.payload || false;
        default:
            return state;
    }
}