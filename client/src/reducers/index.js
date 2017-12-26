import { combineReducers } from 'redux';
import authReducer from './authReducer';
import featuredMoviesReducer from './featuredMoviesReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';
import listsReducer from './listsReducer';

export default combineReducers({
    auth: authReducer,
    featuredMovies: featuredMoviesReducer,
    movie: movieReducer,
    query: searchReducer,
    lists: listsReducer,
});