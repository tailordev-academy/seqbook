import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Header from 'Header';

it('renders a Header', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find('.navbar')).toHaveLength(1);
  expect(wrapper.find(Link)).toHaveLength(3);
});
