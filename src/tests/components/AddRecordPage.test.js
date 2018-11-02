import React from 'react';
import { shallow } from 'enzyme';
import '../setUpTests';
import { AddRecordPage } from '../../components/AddRecordPage';
import { RecordForm } from '../../components/RecordForm';
import records from '../fixtures/records';

// using spies below
let startAddRecord, history, wrapper;
beforeEach(() => {
    startAddRecord = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddRecordPage 
        startAddRecord={startAddRecord} history={history} />);
});

test('should render AddRecordPage correctly', () => {
    // const onSubmit = jest.fn();
    // const history = { push: jest.fn() };
    // const wrapper = shallow(<AddRecordPage 
    //     onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    // const onSubmit = jest.fn();
    // const history = { push: jest.fn() };
    // const wrapper = shallow(<AddRecordPage 
    //     onSubmit={onSubmit} history={history} />);
    wrapper.find('RecordForm').prop('onSubmit')(records[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddRecord).toHaveBeenLastCalledWith(records[1]);
});
