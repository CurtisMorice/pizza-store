import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'; // Makes development easier

const custReducer = (state = [], action) => {
    if(action.type === 'ADD_CUST') {
        state = action.payload;
    }
    return state;
};

const cartReducer = (state = [], action) => {
    if(action.type === 'ADD_ORDER') {
        state = action.payload
        
        
    } else if(action.type === 'UPDATE_TOTAL') {
        console.log('in UPDATE_TOTAL');
        
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        custReducer,
        cartReducer
    }),
    applyMiddleware(logger)
);

// ReactDOM.render( <Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();