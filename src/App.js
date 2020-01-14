import React, { Component } from 'react';
import { CV } from './CV';
import { TestApi } from './TestApi';
import { ReactMainConcepts } from './ReactMainConcepts'; // DEBUG
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
                <ReactMainConcepts name='Andrew'/>
                <CV/>
                <TestApi/>
            </div>
        );
    }
}

export default App;
