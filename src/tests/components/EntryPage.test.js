import React from 'react';
import { shallow } from 'enzyme';
import '../setUpTests';
import EntryPage from '../../components/EntryPage';

test('should render Entrypage', () => {
    const wrapper = shallow(<EntryPage />);
    expect(wrapper).toMatchSnapshot();
})