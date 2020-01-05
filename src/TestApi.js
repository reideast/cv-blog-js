import React, { Component } from 'react';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export class TestApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: null,
            apiStatusSuccess: false
        };
    }

    async componentDidMount() {
        try {
            console.log('About to fetch from API, URL=', REACT_APP_API_URL);  // DEBUG
            const res = await fetch(REACT_APP_API_URL + '/testApi');
            if (res.status >= 400) {
                throw new Error('API Failure');
            }
            const result = await res.text();
            this.setState({ apiResponse: result, apiStatusSuccess: true });
        } catch (err) {
            console.log('TestAPI fetch failure', err);
            this.setState({ apiResponse: 'API connection failed', apiStatusSuccess: false });
        }
    }

    render() {
        return (
            <div id='api-test-result' className={this.state.apiStatusSuccess ? 'api-success' : 'api-failure'}>
                <p>{this.state.apiResponse || 'Loading...'}</p>
            </div>
        );
    }
}

export default TestApi;
