import React from 'react';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export async function fetchFromApi(endpoint, apiResultProp, isText = false) {
    try {
        const res = await fetch(REACT_APP_API_URL + endpoint);
        if (res.status >= 400) {
            throw new Error('API Failure');
        }
        const result = isText ? await res.text() : await res.json();
        this.setState({ [apiResultProp]: result, apiFetchCompleted: true });
    } catch (err) {
        this.setState({ apiFetchFailureMessage: 'API fetch failure', apiFetchCompleted: true });
    }
}

export function generateApiLoadingOrElements(apiResultsProp, elementGeneratorFunction) {
    return (
        (this.state.apiFetchCompleted) ? (
            (this.state[apiResultsProp]) ? (
                elementGeneratorFunction.call(this)
            ) : (
                <div className='api-failure'>
                    {this.state.apiFetchFailureMessage}
                </div>
            )
        ) : (
            <div>Loading...</div>
        )
    );
}
