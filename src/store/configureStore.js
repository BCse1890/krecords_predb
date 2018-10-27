import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import recordsReducer from '../reducers/records';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store initially using single reducer
/* const store = createStore(recordsReducer);
console.log(store.getState()); */

// then create store using combine reducer
export default () => {
    const store = createStore(combineReducers({
        records: recordsReducer,
        filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

