import React from 'react';
import { shallow } from 'enzyme';
import { fetchFromApi, generateApiLoadingOrElements } from '../apiMethods';

describe('fetchFromApi', () => {
    beforeAll(() => {
        global.fetch = jest.fn(); // So that it can be used with mockImplementation(), see: https://jestjs.io/docs/en/jest-object#jestfnimplementation
    });

    it('updates state after loading is done', (informThatTestIsDone) => {
        // Define a fake function to be called instead of fetch(), see https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn
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
        const spyFetch = jest.spyOn(global, 'fetch');
        const returnedPromise = fetchFromApi.call(objThis, 'api/endpoint', 'results', true);
        expect(spyFetch).toHaveBeenCalled();
        returnedPromise.then(() => {
            expect(myState.apiFetchCompleted).toBeTruthy();
            expect(myState.results).toEqual('set');

            fetch.mockClear();
            informThatTestIsDone();
        });
    });

    it('throws an error when fetch() fails', (informThatTestIsDone) => {
        fetch.mockImplementation(() => {
            return Promise.resolve({ status: 400 });
        });

        let myState = { apiFetchFailureMessage: undefined, apiFetchCompleted: false };
        let objThis = {
            setState: (newState) => {
                myState = newState;
            }
        };
        const returnedPromise = fetchFromApi.call(objThis, 'api/endpoint', 'results', true);
        returnedPromise.then(() => {
            // Expect that no Error() was thrown, but it was caught and converted to a state change
            expect(myState.apiFetchCompleted).toBeTruthy();
            expect(myState.apiFetchFailureMessage).toEqual('API fetch failure');

            fetch.mockClear();
            informThatTestIsDone();
        });
    });
});

describe('generateApiLoadingOrElements', () => {
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
});
