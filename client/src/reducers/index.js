import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featuredMoviesReducer from './featuredMoviesReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';
import listsReducer from './listsReducer';
import listItemsReducer from './listItemsReducer';

export default combineReducers({
    auth: authReducer,
    featuredMovies: featuredMoviesReducer,
    movie: movieReducer,
    query: searchReducer,
    lists: listsReducer,
    listItems: listItemsReducer
});