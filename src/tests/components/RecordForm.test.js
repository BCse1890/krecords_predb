import React from 'react';
import { shallow } from 'enzyme';
import '../setUpTests';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import RecordForm from '../../components/RecordForm';
import records from '../fixtures/records';

test('should render RecordForm correctly', () => {
    const wrapper = shallow(<RecordForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render RecordForm with record data', () => {
    const wrapper = shallow(<RecordForm record = {records[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<RecordForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New name';
    const wrapper = shallow(<RecordForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('name')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'New note';
    const wrapper = shallow(<RecordForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set gradeLevel if valid input', () => {
    const value = '8';
    const wrapper = shallow(<RecordForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('gradeLevel')).toBe(value);
});

test('should not set gradeLevel if invalid input', () => {
    const value = 'd';
    const wrapper = shallow(<RecordForm />);
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('gradeLevel')).toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<RecordForm record={records[1]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        name: records[1].name,
        mainDojo: records[1].mainDojo,
        gradeLevel: records[1].gradeLevel,
        gradingDate: records[1].gradingDate,
        note: records[1].note
    });
});

test('should set new gradingDate on date change', () => {
    const now = moment();
    const wrapper = shallow(<RecordForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('gradingDate')).toEqual(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<RecordForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});