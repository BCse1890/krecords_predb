import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// add record
// delete record
// update record

// set Text Filter
// set sortBy grade
// set SortBy mainDojo
// set startDate filter
// set endDate filter

const demoState = {
    studentRecord: [{
        id: 'testid',
        name: '',
        address: '',
        contactTel: '',
        relativeContactName: '',
        relativeContactTel: '',
        mainDojo: '',
        dateFirstClass: 0,
        gradeLevel: undefined,
        dateLastGrading: 0
    }],
    filters: {
        text: 'Jo Smith',
        sortBy: 'Dojo',
        startDate: undefined,
        endDate: undefined
    } 
};

// ADD RECORD
const addRecord = ( {name='', address='', contactTel='', relativeContactName='',
    relativeContactTel='', mainDojo='', dateFirstClass=0, gradeLevel='', 
    dateLastGrading= 0
    } = {} 
) => ({
    type: 'ADD_RECORD',
    record: {
        id: uuid(),
        name,
        address,
        contactTel,
        relativeContactName,
        relativeContactTel,
        mainDojo,
        dateFirstClass,
        gradeLevel,
        dateLastGrading
    }
})

// DELETE RECORD
const deleteRecord = ({ id } = {}) => ({
    type: 'DELETE_RECORD',
    id
});

// EDIT RECORD
const editRecord = (id, updates) => ({
    type: 'EDIT_RECORD',
    id,
    updates
});


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_GRADEDATE_FILTER
const setGradeDateFilter = (dateLastGrading) => ({
    type: 'SET_GRADEDATE_FILTER',
    dateLastGrading
})

// SET SORT BY DOJO
const SortByDojo = () => ({
    type: 'SORT_BY_DOJO'
});

// SET SORT BY GRADE
const SortByGrade = () => ({
    type: 'SORT_BY_GRADE'
});

// SET STARTDATE
const setStartDate = (startDate) => ({
    type: 'SET_STARTDATE',
    startDate
});

// SET ENDDATE
const setEndDate = (endDate) => ({
    type: 'SET_ENDDATE',
    endDate
});


// create kRecords Reducer
const recordsReducerDefault = [];

const recordsReducer = (state = recordsReducerDefault, action) => {
    switch(action.type) {
        case 'ADD_RECORD':
            return [
                //spreads out all existing records in array
                // and adds on a new array through action.record
                ...state,
                action.record
            ];   
        case 'DELETE_RECORD':
            return state.filter(({ id }) => (id !== action.id) );
        case 'EDIT_RECORD':
            return state.map((record) => {
                    if(record.id === action.id) {
                        return {
                            ...record,
                            ...action.updates
                        }
                    } else {
                        return record;
                    }
                });
        default:
            return state;
    }
};

// create filtersReducer
const filtersReducerDefault = {
    text: '',
    dateLastGrading: undefined,
    sortBy: 'mainDojo',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_GRADEDATE_FILTER':
            return {
                ...state,
                dateLastGrading: action.dateLastGrading
            }
        case 'SORT_BY_DOJO':
            return {
                ...state,
                sortBy: 'mainDojo'
            }
        case 'SORT_BY_GRADE':
            return {
                ...state,
                sortBy: 'gradeLevel'
            }
        case 'SET_STARTDATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_ENDDATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
};

// Get Visible Expenses
const getVisibleExpenses = (records, { text, dateLastGrading, sortBy, startDate, endDate }) => {
    return records.filter((record) => {
        // filter out if startDate not a number or record.created >= startDate;
        const startDateMatch = typeof startDate !== 'number' || 
            record.dateFirstClass >= startDate;
        const endDateMatch = typeof endDate !== 'number' ||
            record.dateFirstClass <= endDate;
        //const gradeDateMatch = record.dateLastGrading === dateLastGrading;
        const textMatch = record.name.toLowerCase().includes(text.toLowerCase())  || 
            record.address.toLowerCase().includes(text.toLowerCase()) || 
            record.relativeContactName.toLowerCase().includes(text.toLowerCase()) || 
            record.mainDojo.toLowerCase().includes(text.toLowerCase()) ||
            record.gradeLevel.toLowerCase().includes(text.toLowerCase())
            
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'mainDojo') {
            return a.mainDojo < b.mainDojo ? -1 : 1;
        } else if(sortBy === 'gradeLevel') {
            return a.gradeLevel < b.gradeLevel ? 1 : -1;
        }
    });
};

// create store initially using single reducer
/* const store = createStore(recordsReducer);
console.log(store.getState()); */

// then create store using combine reducer
const store = createStore(combineReducers({
    records: recordsReducer,
    filters: filtersReducer
}));

// watches store for changes and logs these to console
store.subscribe(() => {
    //console.log(store.getState());
    const state = store.getState();
    const visibleExpenses = 
      getVisibleExpenses(state.records, state.filters);
    console.log(visibleExpenses);
});

const record1 = store.dispatch(addRecord({ name: "Bob Currie", 
  address: "20 Hulse Rd, Bristol BS4 5AL", gradeLevel: -1, 
  mainDojo: "Keynsham", dateFirstClass:1000}));
const record2 = store.dispatch(addRecord({ name: "Jo Smith", 
  address: "40 Summer Rd, Bristol", gradeLevel: 8, relativeContactName: 'Donald',
  mainDojo: "Filton", dateFirstClass:-1000, dateLastGrading: 153423}));
  const record3 = store.dispatch(addRecord({ name: "Bill Bloggs", 
  address: "", gradeLevel: 10, relativeContactName: '',
  mainDojo: "Lawrence Weston", dateFirstClass:2000, dateLastGrading: 6538238923}));

// store.dispatch(deleteRecord({ id: record1.record.id }));
// store.dispatch(editRecord(record2.record.id, { address: "30 Winter Road" }));
//store.dispatch(setTextFilter('Bob'));
//store.dispatch(setTextFilter());
//store.dispatch(setGradeDateFilter(153423));
//store.dispatch(setGradeDateFilter());
//store.dispatch(SortByGrade());
store.dispatch(SortByDojo());
store.dispatch(SortByGrade());
// store.dispatch(setStartDate(120));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(880));



const user = {
    name: "Bini",
    home: "Hulse Rd"
}

console.log({
    ...user,
    height: "tall",
    home: "Bini's house"
});