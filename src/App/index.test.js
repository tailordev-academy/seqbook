import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
import App from './index';

it('renders without crashing', () => {
  const store = configureStore();
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(wrapper.hasClass('App')).toEqual(true);
});
