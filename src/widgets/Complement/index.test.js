import React from 'react';
import { shallow } from 'enzyme';
import { readSequence } from 'seq-utils';
import renderer from 'react-test-renderer';

import Sequence from 'ui/Sequence';

import Complement from './index';

it('renders correctly', () => {
  const tree = renderer
    .create(<Complement sequence={readSequence('AAA')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a message when sequence is empty', () => {
  const wrapper = shallow(<Complement sequence={readSequence('')} />);
  expect(wrapper.find(Sequence)).toHaveLength(0);
  expect(wrapper.text()).toContain('sequence is empty');
});

it('uses a Sequence', () => {
  const wrapper = shallow(<Complement sequence={readSequence('AAA')} />);
  expect(wrapper.find(Sequence)).toHaveLength(1);
});
