import { FETCH_LIST_MOVIES } from "../actions/actionTypes";

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_LIST_MOVIES:
            return action.payload || false;
        default:
            return state;
    }
}