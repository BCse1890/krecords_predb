import React from 'react';
import { shallow, mount, render } from 'enzyme';
import '../setUpTests';
import { RecordList } from '../../components/RecordList';
import records from '../fixtures/records';

test('should render RecordList with records', () => {
    const wrapper = shallow(<RecordList records={records}/>);
    expect(wrapper).toMatchSnapshot();
});

test('shoulder render RecordList with empty message', () => {
    const wrapper = shallow(<RecordList records={[]} />);
    expect(wrapper).toMatchSnapshot();
});

