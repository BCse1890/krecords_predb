import React from 'react';
import { shallow } from 'enzyme';
import { RecordListFilters } from '../../components/RecordListFilters';
import '../setUpTests';
import moment from 'moment';
import { filters, altfilters } from '../fixtures/filters';

let setTextFilter, SortByGrade, SortByDojo, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    SortByDojo = jest.fn();
    SortByGrade = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <RecordListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            SortByDojo={SortByDojo}
            SortByGrade={SortByGrade}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
});

test('should render RecordListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render RenderListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should set note on textarea change', () => {
    const value = 'New note';
    
})


test('should set note on textarea change', () => {
    const value = 'New note';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by mainDojo', () => {
    const value = 'mainDojo';
    wrapper.setProps({
        filters: filters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(SortByDojo).toHaveBeenCalled();
});

test('should sort by gradeLevel', () => {
    const value = 'gradeLevel';
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(SortByGrade).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'months');
    const endDate = moment(0).add(7, 'months');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// test('should handle date changes', () => {
//     const startDate = moment(0).add(4, 'years');
//     const endDate =  moment(0).add(8, 'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// });

test('should handle date changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});