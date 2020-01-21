import React from 'react';
import { shallow } from 'enzyme';
import { fetchFromApi, generateApiLoadingOrElements } from '../apiMethods';
import * as myModule from '../apiMethods';

beforeAll(() => {
    global.fetch = jest.fn(); // So that it can be used with mockImplementation()
});

it('updates state after loading is done', (informJestThatTestIsDone) => {
    fetch.mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            text: () => {
                return Promise.resolve('set');
            }
        })
    });

    let myState = { results: 'unchanged', apiFetchCompleted: false };
    let objThis = {
        setState: (newState) => {
            myState = newState;
        }
    };
    expect(myState.results).toEqual('unchanged');

    const spy = jest.spyOn(myModule, 'fetchFromApi');
    const promiseResult = fetchFromApi.call(objThis, 'api/endpoint', 'results', true);
    expect(spy).toHaveBeenCalled();

    promiseResult.then(() => {
        expect(myState.results).toEqual('set');

        fetch.mockClear();
        informJestThatTestIsDone();
    });
});

// it('throws an error when fetch() fails'); TODO

it('emits a loading DOM element while fetch is in progress', () => {
    let obj = {
        state: {
            apiFetchCompleted: false
        }
    };
    let domObj = generateApiLoadingOrElements.call(obj);
    let wrapper = shallow(domObj);
    expect(wrapper.contains(<div>Loading...</div>)).toBeTruthy();
    wrapper.unmount();
});

it('emits an error DOM element with the specified after a fetch fails', () => {
    let obj = {
        state: {
            apiFetchCompleted: true,
            results: null,
            apiFetchFailureMessage: 'Fetch failed!'
        }
    };
    let domObj = generateApiLoadingOrElements.call(obj, 'results');
    let wrapper = shallow(domObj);
    expect(wrapper.text()).toContain('Fetch failed!');
    wrapper.unmount();
});

it('emits the return value of the generator function when a fetch was successful', () => {
    let obj = {
        state: {
            apiFetchCompleted: true,
            results: 'Contents!'
        }
    };
    function domGenerator() {
        return (
            <div className='myClass'>{this.state.results}</div>
        );
    }
    let domObj = generateApiLoadingOrElements.call(obj, 'results', domGenerator);
    let wrapper = shallow(domObj);
    expect(wrapper.find('.myClass').length).toBe(1);
    expect(wrapper.text()).toContain('Contents!');
    wrapper.unmount();
});
