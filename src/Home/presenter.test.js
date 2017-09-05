import React from 'react';
import { shallow } from 'enzyme';
import { generate } from 'seq-utils';

import Home from './presenter';
import SequenceView from 'SequenceView';

it('renders without crashing', () => {
  const wrapper = shallow(
    <Home
      sequences={[]}
      onAddSequence={jest.fn()}
      onRemoveSequence={jest.fn()}
      onSelectSequence={jest.fn()}
    />
  );
  expect(wrapper.hasClass('Home')).toEqual(true);
});

it('renders a sequence view when current sequence is supplied', () => {
  const wrapper = shallow(
    <Home
      current={generate()}
      sequences={[]}
      onAddSequence={jest.fn()}
      onRemoveSequence={jest.fn()}
      onSelectSequence={jest.fn()}
    />
  );
  expect(wrapper.find(SequenceView)).toHaveLength(1);
});
