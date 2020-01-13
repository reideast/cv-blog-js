import React, { Component } from 'react';

// React tutorial, see: https://reactjs.org/docs/hello-world.html
export class ReactMainConcepts extends Component {
    render() {
        function greet(user) {
            if (user) {
                return <h1>Hello, { user }!</h1>;
            } else {
                return <h1>Hello, world!</h1>;
            }
        }
        return (
            <div>
                { greet() }
                { greet("Andrew") }
            </div>
        );
    }
}
