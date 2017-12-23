import axios from 'axios';
import {
    FETCH_FEATURED_MOVIES,
    FETCH_USER,
    FETCH_MOVIE_BY_ID,
    FETCH_SEARCH_RESULTS,
    CREATE_LIST
} from "./actionTypes";
import keys from '../config/keys';

export const fetchUser = () =>
    async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: res.data });
    };

export const fetchFeaturedMovies = () =>
    async dispatch => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${keys.tmdbKey}&language=en-US&page=1`);
        dispatch({type: FETCH_FEATURED_MOVIES, payload: res.data });
    };

export const fetchMovieById = (id) =>
    async dispatch => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${keys.tmdbKey}&append_to_response=videos,credits`);
        dispatch({type: FETCH_MOVIE_BY_ID, payload: res.data });
    };

export const fetchSearchResults = (query) =>
    // let fixedQuery = query.replace(/ /g,"%20");
    async dispatch => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${keys.tmdbKey}&language=en-US&query=${query.replace(/ /g, "%20")}&append_to_response=credits&page=1&include_adult=false`);
        dispatch({type: FETCH_SEARCH_RESULTS, payload: res.data });
    };

export const createList = (title) =>
    async dispatch => {
        const req = await axios.post('/api/create_list', {title});
        dispatch({type: CREATE_LIST, payload: req });
    };

