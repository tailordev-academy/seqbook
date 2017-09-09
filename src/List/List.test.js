import React from 'react';
import { shallow, mount } from 'enzyme';
import { generate } from 'seq-utils';

import List from './index';
import Item from './Item';

it('renders a message when there is no sequence', () => {
  const wrapper = shallow(<List sequences={[]} onSelectSequence={() => {}} />);

  expect(wrapper.contains(<p>no sequences</p>)).toEqual(true);
});

it('renders items', () => {
  const sequences = [generate(), generate()];
  const wrapper = shallow(
    <List sequences={sequences} onSelectSequence={() => {}} />
  );

  expect(wrapper.find(Item)).toHaveLength(sequences.length);
});

it('receives event when Item is selected', () => {
  const sequence = generate();
  const spy = jest.fn();

  const wrapper = mount(<List sequences={[sequence]} onSelectSequence={spy} />);

  expect(spy).not.toHaveBeenCalled();
  wrapper.find('button').simulate('click');
  expect(spy).toHaveBeenCalled();
});
