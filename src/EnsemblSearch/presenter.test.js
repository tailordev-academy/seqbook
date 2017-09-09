import React from 'react';
import { shallow } from 'enzyme';

import EnsemblSearch from './presenter';

const createFakeEvent = ({ value = '' } = {}) => ({
  preventDefault: jest.fn(),
  target: { value },
});

it('renders correctly', () => {
  const wrapper = shallow(
    <EnsemblSearch onFetch={jest.fn()} isFetching={false} />
  );
  expect(wrapper.find('.EnsemblSearch')).toHaveLength(1);
  expect(wrapper.find('button')).toHaveLength(1);
});

it('hides the button when fetching', () => {
  const wrapper = shallow(<EnsemblSearch onFetch={jest.fn()} isFetching />);
  expect(wrapper.find('button')).toHaveLength(0);
});

it('calls onFetch callback on submit', () => {
  const onFetch = jest.fn();
  const wrapper = shallow(
    <EnsemblSearch onFetch={onFetch} isFetching={false} />
  );

  expect(onFetch).not.toHaveBeenCalled();

  wrapper.find('button').simulate('click', createFakeEvent());
  expect(onFetch).toHaveBeenCalled();
});

it('controls the input', () => {
  const wrapper = shallow(
    <EnsemblSearch onFetch={jest.fn()} isFetching={false} />
  );

  expect(wrapper.state('search')).toEqual('');

  wrapper.find('input').simulate('change', createFakeEvent({ value: 'foo' }));
  expect(wrapper.state('search')).toEqual('foo');
});
