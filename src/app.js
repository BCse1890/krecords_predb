
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetRecords } from "./actions/records";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/records";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';


const store = configureStore();




/* const record1 = store.dispatch(addRecord({ name: "Bob Currie", 
address: "20 Hulse Rd, Bristol BS4 5AL", gradeLevel: -1, classesSinceGrading:63,
mainDojo: "Keynsham", dateJoinClub:1000}));
const record2 = store.dispatch(addRecord({ name: "Jo Smith", 
address: "40 Summer Rd, Bristol", gradeLevel: 8, relativeName: 'Donald',
mainDojo: "Filton", dateJoinClub:-1000}));
const record3 = store.dispatch(addRecord({ name: "Bill Bloggs", 
address: "", gradeLevel: 10, relativeName: '', classesSinceGrading: 5,
mainDojo: "Lawrence Weston", dateJoinClub:2000})); */


const state = store.getState();
  const visibleExpenses = 
    getVisibleExpenses(state.records, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>...loading...</p>, document.getElementById('app'));

store.dispatch(startSetRecords()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
  


