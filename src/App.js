import React, { Component } from 'react';
import { CV } from './cv/CV';
import { TestApi } from './TestApi';
import './App.css';

// import logo from './logo.svg';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <CV/>
                <TestApi/>
            </div>
        );
    }
}

export default App;
