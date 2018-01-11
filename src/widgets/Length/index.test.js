import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Card from 'ui/Card';

import Length from './index';

it('renders correctly', () => {
  const dna = 'ATCG';
  const tree = renderer.create(<Length dna={dna} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('uses a Card', () => {
  const wrapper = shallow(<Length dna={''} />);
  expect(wrapper.find(Card)).toHaveLength(1);
});
