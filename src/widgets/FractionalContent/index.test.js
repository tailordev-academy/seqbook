import React from 'react';
import { shallow, mount } from 'enzyme';
import { readSequence } from 'seq-utils';
import { VictoryPie } from 'victory';

import FractionalContent from './index';

it('renders a pie chart with fractional content', () => {
  const sequence = readSequence('AAA');
  const wrapper = shallow(<FractionalContent sequence={sequence} />);

  expect(wrapper.find('.FractionalContent')).toHaveLength(1);
  expect(wrapper.find(VictoryPie)).toHaveLength(1);

  const getLabel = wrapper.find(VictoryPie).prop('labels');
  expect(getLabel({ x: 'A', y: 0.5 })).toEqual('A (50%)');
});
