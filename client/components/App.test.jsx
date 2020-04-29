import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<App />);

describe(App, () => {
    it('Renders Hello World', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.text()).toEqual('Hello World');
      });
})