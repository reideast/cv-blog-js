import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { TestApi } from './TestApi';

global.fetch = require('node-fetch');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <CV/>
                <TestApi/>
            </div>
            // <div className="App">
            //     <header className="App-header">
            //         <img src={logo} className="App-logo" alt="logo" />
            //         <h1 className="App-title">Welcome to React</h1>
            //     </header>
            // </div>
        );
    }
}

class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className='wrapper'>
                <article className='cv-grid-container'>
                    <section className='cv-grid-section-name cv-grid-section'>
                        <hr />
                    </section>
                    <section className='cv-grid-section-photo cv-grid-section'>
                        <div className='circle'></div>
                    </section>
                    <section className='cv-grid-section-about cv-grid-section'>
                        <hr />
                        <hr />
                    </section>
                    <section className='cv-grid-section-work cv-grid-section'>
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                        <hr />
                    </section>
                    <section className='cv-grid-section-education cv-grid-section'>
                        <hr />
                        <hr />
                    </section>
                    <section className='cv-grid-section-community cv-grid-section'>
                        <hr />
                        <hr />
                    </section>
                    <section className='cv-grid-section-skills cv-grid-section'>
                        <hr />
                        <hr />
                    </section>
                </article>
            </main>
        )
    }
}

export default App;
