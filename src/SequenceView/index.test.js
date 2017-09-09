import React from 'react';
import { shallow } from 'enzyme';
import { generate } from 'seq-utils';

import SequenceView from 'SequenceView';

it('renders correctly', () => {
  const sequence = generate();
  const wrapper = shallow(
    <SequenceView sequence={sequence} onRemoveSequence={jest.fn()} />
  );
  expect(wrapper.find('.SequenceView')).toHaveLength(1);
});

it('calls onRemoveSequence callback when remove button is clicked', () => {
  const sequence = generate();
  const onRemoveSequence = jest.fn();
  const wrapper = shallow(
    <SequenceView sequence={sequence} onRemoveSequence={onRemoveSequence} />
  );

  expect(onRemoveSequence).not.toHaveBeenCalled();

  wrapper.find('button').simulate('click');
  expect(onRemoveSequence).toHaveBeenCalled();
});
