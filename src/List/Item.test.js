import React from 'react';
import renderer from 'react-test-renderer';

import Item from './Item';

it('renders correctly', () => {
  const tree = renderer.create(
    <Item title="item title" onSelect={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
