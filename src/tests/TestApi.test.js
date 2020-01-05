// Global test config TODO: should be in its own file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import React from 'react';
// import { render } from '@testing-library/react';
import { shallow, mount, render } from 'enzyme';

import { TestApi } from '../TestApi';
// import nock from 'nock';
// nock.disableNetConnect();

configure({ adapter: new Adapter() }); // Global test config TODO: should be in its own file

beforeAll(() => {
    global.fetch = jest.fn();
});

let wrapper;

beforeEach(() => {
    wrapper = shallow(<TestApi />, { disableLifecycleMethods: true });
});

afterEach(() => {
    wrapper.unmount();
});

it('renders API loading message', () => {
    // const { getByText } = render(<TestApi />);
    // const testAPIElem = getByText(/Loading.../i);
    // expect(testAPIElem).toBeInTheDocument();
    console.log(wrapper);
    expect(wrapper.find('#api-test-result').length).toBe(1);
    // expect(wrapper.find("p#api-test-result").exists()).toBeTruthy();
});

it('renders API results', (done) => {
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

    const spyDidMount = jest.spyOn(TestApi.prototype, 'componentDidMount');

    fetch.mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            text: () => {
                return Promise.resolve('API is responding');
            }
        });
    })

    const didMount = wrapper.instance().componentDidMount();

    expect(spyDidMount).toHaveBeenCalled();

    didMount.then(() => {
        wrapper.update(); // Instruct React to update

        expect(wrapper.find("#api-test-result").text()).toContain('API is responding');

        spyDidMount.mockRestore();
        fetch.mockClear();
        done();
    });
});

