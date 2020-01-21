import React from 'react';
import { shallow } from 'enzyme';
import { generateApiLoadingOrElements } from '../apiMethods';

it('displays loading while fetch is in progress', () => {
    let obj = {
        state: {
            apiFetchCompleted: false
        }
    };
    let domObj = generateApiLoadingOrElements.call(obj);
    let wrapper = shallow(domObj);
    expect(wrapper.contains(<div>Loading...</div>)).toBeTruthy();
});

it('displays an error after a fetch fails', () => {
    let obj = {
        state: {
            apiFetchCompleted: true,
            results: null,
            apiFetchFailureMessage: 'Fetch failed!'
        }
    };
    let domObj = generateApiLoadingOrElements.call(obj, 'results');
    let wrapper = shallow(domObj);
    expect(wrapper.contains(<div className='api-failure'>Fetch failed!</div>)).toBeTruthy();
});
