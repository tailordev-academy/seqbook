import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import Home from './index';

it('renders without crashing', () => {
  const store = configureStore();
  const wrapper = mount(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(wrapper.find('.Home')).toHaveLength(1);
});
