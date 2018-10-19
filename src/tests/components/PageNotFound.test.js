import React from 'react';
import { shallow } from 'enzyme';
import '../setUpTests';
import PageNotFound from '../../components/PageNotFound';

test('render PageNotFound', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
})
