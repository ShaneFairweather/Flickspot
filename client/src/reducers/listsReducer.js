import { FETCH_LISTS } from "../actions/actionTypes";

export default function(state = null, action) {
    switch(action.type) {
        case FETCH_LISTS:
            return action.payload || false;
        default:
            return state;
    }
}