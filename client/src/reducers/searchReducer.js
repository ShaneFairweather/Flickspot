import { FETCH_SEARCH_RESULTS } from "../actions/actionTypes";

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_SEARCH_RESULTS:
            return action.payload || false;
        default:
            return state;
    }
}