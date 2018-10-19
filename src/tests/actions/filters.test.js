import moment from 'moment';
import { setStartDate, setEndDate, SortByDojo, SortByGrade, setTextFilter } from '../../actions/filters';

test('generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_STARTDATE',
        startDate: moment(0)
    });
});

test('generate end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_ENDDATE',
        endDate: moment(0)
    });
});

test('generate action object for sortBy mainDojo', () => {
    const action = SortByDojo();
    expect(action).toEqual({
        type: 'SORT_BY_DOJO' 
    });
});

test('generate action object for sortBy gradeLevel', () => {
    const action = SortByGrade();
    expect(action).toEqual({
        type: 'SORT_BY_GRADE' 
    });
});

test('generate setText action object with text input', () => {
    const text = "Test text string";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('generate setText action object with default input', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});