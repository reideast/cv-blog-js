import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { CodeProject } from '../CodeProject';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CodeProject />);
});

afterEach(() => {
    wrapper.unmount();
});

it('renders a link', () => {
    const link = wrapper.find('a.inline-icon-link');
    expect(link.length).toBe(1); // Exactly one element found
});

