import React from 'react';
import { shallow, mount, render } from 'enzyme';
import '../setUpTests';
import records from '../fixtures/records';
import RecordListItem from '../../components/RecordListItem';

test('should render RecordListItem', () => {
    const wrapper = shallow(<RecordListItem {...records[1]} />);
    expect(wrapper).toMatchSnapshot();
});