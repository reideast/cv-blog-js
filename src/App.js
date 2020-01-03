import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callApi() {
        console.log('About to fetch from API, URL=', REACT_APP_API_URL);  // DEBUG
        fetch(REACT_APP_API_URL + "/testApi")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callApi();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{ this.state.apiResponse }</p>
            </div>
        );
    }
}

export default App;
