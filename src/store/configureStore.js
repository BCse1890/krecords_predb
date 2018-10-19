import { createStore, combineReducers } from 'redux';
import recordsReducer from '../reducers/records';
import filtersReducer from '../reducers/filters';

// create store initially using single reducer
/* const store = createStore(recordsReducer);
console.log(store.getState()); */

// then create store using combine reducer
export default () => {
    const store = createStore(combineReducers({
        records: recordsReducer,
        filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

