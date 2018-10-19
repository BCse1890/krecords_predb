import React from 'react';
import{ shallow } from 'enzyme';
import '../setUpTests';
import Header from '../../components/Header';

test('render Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})