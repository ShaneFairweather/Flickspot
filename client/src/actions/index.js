import axios from 'axios';
import {
    FETCH_FEATURED_MOVIES,
    FETCH_USER,
    FETCH_MOVIE_BY_ID,
    FETCH_SEARCH_RESULTS,
    CREATE_LIST,
    ADD_MOVIE,
    FETCH_LISTS,
    FETCH_LIST_MOVIES
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

export const createList = (title, description) =>
    async dispatch => {
        const req = await axios.post('/api/create_list', {title, description});
        dispatch({type: CREATE_LIST, payload: req });
    };

export const fetchLists = (user) =>
    async dispatch => {
        const req = await axios.get('/api/fetch_lists', {user});
        dispatch({type: FETCH_LISTS, payload: req });
    };

export const fetchListMovies = (listID) =>
    async dispatch => {
        const req = await axios.get(`/api/lists/${listID}`);
        dispatch({type: FETCH_LIST_MOVIES, payload: req });
    };

export const addMovie = (title, poster, bannerPath, year, movieID, list) =>
    async dispatch => {
        const req = await axios.post('/api/add_movie', {title, poster, bannerPath, year, movieID, list});
        dispatch({type: ADD_MOVIE, payload: req });
    };


