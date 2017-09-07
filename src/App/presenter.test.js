import React from 'react';
import { shallow } from 'enzyme';

import App from './presenter';

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
