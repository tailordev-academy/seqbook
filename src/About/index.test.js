import React from 'react';
import renderer from 'react-test-renderer';

import About from './index';

it('renders correctly', () => {
  const tree = renderer.create(<About />).toJSON();
  expect(tree).toMatchSnapshot();
});
