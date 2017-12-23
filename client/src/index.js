import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

