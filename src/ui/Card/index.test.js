import React from 'react';
import renderer from 'react-test-renderer';

import Card from './index';

it('renders a card', () => {
  const tree = renderer
    .create(<Card title="card title" value="card value" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('can display a unit', () => {
  const tree = renderer
    .create(<Card title="card title" value="10" unit="%" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('can take numbers as value', () => {
  const tree = renderer
    .create(<Card title="card title" value={10} unit="%" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
