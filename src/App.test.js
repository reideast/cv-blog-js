import React from 'react';
import { render } from '@testing-library/react';
import TestApi from './App';
import nock from 'nock';
nock.disableNetConnect();


test('renders API connection message', () => {
  const { getByText } = render(<TestApi />);
  const testAPIElem = getByText(/API connecting/i);
  expect(testAPIElem).toBeInTheDocument();
});

it('renders without crashing', () => {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const scope = nock(REACT_APP_API_URL)
        .get('/testApi')
        .reply(200, 'API is responding',
            {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'text/html'
            });
    const { getByText } = render(<TestApi />);
    scope.done();
    const testAPIElem = getByText(/API is responding/i);
    expect(testAPIElem).toBeInTheDocument();
});

