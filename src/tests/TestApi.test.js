import React from 'react';
// import { render } from '@testing-library/react';
import { shallow, mount, render } from 'enzyme';

import { TestApi } from '../TestApi';
// import nock from 'nock';
// nock.disableNetConnect();

// Mock method, see: https://medium.com/@manastunga/unit-testing-api-calls-in-react-enzyme-and-jest-133b87aaacb4
beforeAll(() => {
    global.fetch = jest.fn(); // So that it can be used with mockImplementation()
});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<TestApi />, { disableLifecycleMethods: true }); // disableLifecycleMethods required to avoid letting test object rendered prematurely call them
});

afterEach(() => {
    wrapper.unmount();
});

it('renders API loading message', () => {
    const testApiElem = wrapper.find('#api-test-result');
    expect(testApiElem.length).toBe(1); // Element found
    expect(testApiElem.text()).toContain('Loading'); // Text displayed
    expect(testApiElem.hasClass('api-failure')).toBeTruthy(); // className in list
});

it('renders API results', (testIsDone) => {
    // const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    // const scope = nock(REACT_APP_API_URL)
    //     .get('/testApi')
    //     .reply(200, 'API is responding',
    //         {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-type': 'text/html'
    //         });
    // const { getByText } = render(<TestApi />);
    // scope.done();
    // const testAPIElem = getByText(/API is responding/i);
    // expect(testAPIElem).toBeInTheDocument();

    fetch.mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            text: () => {
                return Promise.resolve('API is responding');
            }
        });
    });

    const spyDidMount = jest.spyOn(TestApi.prototype, 'componentDidMount');
    const didMount = wrapper.instance().componentDidMount();
    expect(spyDidMount).toHaveBeenCalled();
    didMount.then(() => {
        wrapper.update(); // Instruct React to update elements

        const testApiElem = wrapper.find("#api-test-result");
        expect(testApiElem.text()).toContain('API is responding');
        expect(testApiElem.hasClass('api-success')).toBeTruthy(); // className in list

        spyDidMount.mockRestore();
        fetch.mockClear();
        testIsDone();
    });
});

