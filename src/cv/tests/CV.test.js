import React from 'react';
import { shallow } from 'enzyme';

import { CV, CVName } from '../CV';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<CV />);
});

afterEach(() => {
    wrapper.unmount();
});

it('Renders a CV', () => {
    const cvContainerElem = wrapper.find('.cv-grid-container');
    expect(cvContainerElem.length).toBe(1); // Exactly one element found
});

it('Contains sub-classes', () => {
    const cvContainerElem = wrapper.find('.cv-grid-container');
    expect(cvContainerElem.contains(<CVName />)).toBeTruthy();
});

// it('renders API results', () => {
//     const testApiElem = wrapper.find("#api-test-result");
//     expect(testApiElem.text()).toContain('API is responding');
//     expect(testApiElem.hasClass('api-success')).toBeTruthy();
// });
