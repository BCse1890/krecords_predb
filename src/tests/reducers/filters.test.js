import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('set up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'mainDojo',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set sortBy to gradeLevel', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_GRADE'});
    expect(state.sortBy).toBe('gradeLevel');
});

test('set sortBy to mainDojo', () => {
    const startState = {
        text: '',
        sortBy: 'gradingLevel',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DOJO' };
    const state = filtersReducer(undefined, action);
    expect(state.sortBy).toBe('mainDojo');
})

test('set startDate filter', () => {
    const startDate = moment(0).add(340, 'days');
    const action = { 
        type: 'SET_STARTDATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('set endDate filter', () => {
    const endDate = moment(0).add(4500, 'days');
    const action = { 
        type: 'SET_ENDDATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});