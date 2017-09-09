import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import Seqbook from 'Seqbook';
import Header from 'Header';

it('renders correctly', () => {
  const wrapper = shallow(<Seqbook />);

  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(Route)).toHaveLength(3);
});
