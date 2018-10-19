import moment from 'moment';

// create filtersReducer
const filtersReducerDefault = {
    text: '',
    sortBy: 'mainDojo',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
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
        case 'FILTER_BY_GRADEDATE':
            return {
                ...state,
                filterBy: 'gradingDate'
            }
        case 'FILTER_BY_JOINDATE':
        return {
            ...state,
            filterBy: 'dateJoinClub'
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

export default filtersReducer;