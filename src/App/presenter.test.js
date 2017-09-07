import React from 'react';
import { shallow } from 'enzyme';
import { generate } from 'seq-utils';

import App from './presenter';
import SequenceView from 'SequenceView';

it('renders without crashing', () => {
  const wrapper = shallow(
    <App
      sequences={[]}
      onAddSequence={jest.fn()}
      onRemoveSequence={jest.fn()}
      onSelectSequence={jest.fn()}
    />
  );
  expect(wrapper.hasClass('App')).toEqual(true);
});

it('renders a sequence view when current sequence is supplied', () => {
  const wrapper = shallow(
    <App
      current={generate()}
      sequences={[]}
      onAddSequence={jest.fn()}
      onRemoveSequence={jest.fn()}
      onSelectSequence={jest.fn()}
    />
  );
  expect(wrapper.find(SequenceView)).toHaveLength(1);
});
