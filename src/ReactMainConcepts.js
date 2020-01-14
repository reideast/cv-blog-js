import React, { Component } from 'react';

// React tutorial, see: https://reactjs.org/docs/hello-world.html
export class ReactMainConcepts extends Component {
    // Docs reference for React.Component, see: https://reactjs.org/docs/react-component.html

    // Lifecycle methods diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    // Common lifecycle methods:
    //     1. constructor()
    //     2. static getDerivedStateFromProps()
    //     - Note that componentWillMount() is removed, which I remember used to be here
    //     3. render()  <-- Only REQUIRED method
    //     4. componentDidMount()
    // Unmount:
    //     1. componentWillUnmount()
    // Error during rendering or lifecycle or thrown error from child method's constructor()
    //     1. static getDerivedStateFromError()
    //     2 componentDidCatch()
    //     - These are useful for catching errors from child components, and then rendering the error in the DOM
    // Triggered:
    //     1. static getDerivedStateFromProps()
    //     2. render()
    //     3. componentDidUpdate()
    //
    // Common API methods:
    //     setState()
    //     forceUpdate()
    // Uncommon API methods:
    //     shouldComponentUpdate()
    //
    // Instance Properties: props, state
    //
    // ClassProperties: defaultProps, displayName

    constructor(props) {
        super(props); // Required! Boilerplate JavaScript
        // Constructor is typically used for:
        //     1. Init state, see: https://reactjs.org/docs/state-and-lifecycle.html
        //     2. Binding event handlers to methods in this instance, see: https://reactjs.org/docs/handling-events.html
        //
        // Setting state in constructor:
        //     `this.state = { ... }; <-- Don't use setState(), use that in other methods
        //     Don't copy props into state, rather use props directly: `this.setState = { foo: props.foo };` <-- ONLY use if you're intending to store the initial value of the prop
        //         See: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    static getDerivedStateFromProps(props, state) {
        // should return an object to update state, or null
        // working with derived state requires a lot of boilerplate. Alternatives are simpler, see: https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    }

    componentDidMount() {
        // Invoked immediately after component mounted into DOM, so DOM is available
        // Often used to instantiate a network request (ajax/fetch)
        // Set up subscriptions, which are unsubscribed in componentWillUnmount()
        //
        // Setting state
        // If you call setState(), it triggers an extra rendering. This can cause performance issues
        // Sometimes, needed: measure DOM node to get size or position
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Whenever updated (but not for the initial render)
        // Can operate on DOM in response to a the component updating
        // Often used to make network requests. Take care to verify through prev* inspection that it's actually needed: `if (this.props.userID !== prevProps.userID) { this.fetchData(this.props.userID); }`
        //
        // setState() infinite loops:
        // Perfectly fine to change state, but guard it with a conditional on prev* (see above example)
        //     ...I think I discovered this method through days of trial and error when I first made a React app last year! ^_^
        // Again, don't mirror props using state (such as to update this component when parent state changes). Just use props directly. Else risks bugs, loops.
        //
        // Common idiom: compare this.props vs. prevProps / this.state vs. prevState
        //
        // This method won't be invoked if shouldComponentUpdate() returns false. I guess this make a component completely static?
        //     For performance optimisation only (and really, should consider PureComponent instead), not for preventing updating
    }

    componentWillUnmount() {
        // Common cleanup:
        //     - unset timers
        //     - cancel network requests
        //     - unsubscribe
        //
        // Don't call setState. It simply won't do anything (since component is never going to be rendered again)
    }

    render() {
        function greet(user) {
            if (user) {
                return <h1>Hello, { user }!</h1>;
            } else {
                return <h1>Hello, world!</h1>;
            }
        }
        // render() should return:
        // 1. A JSX node, or other element
        // 2. React now supports returning a top-level list of DOM nodes w/o the cruft of a wrapping <div>
        //     <React.Fragment><ChildA /><ChildB /></React.Fragment>
        //     <><ChildA /><ChildB /></>  <-- shorthand, but think it's obtuse
        // 3. Render this component outside of the DOM hierarchy under the parent: Portals
        // 4. Strings  <-- renders a simple text node
        // 5. Numbers  <-- renders a simple text node
        // 6. null or either Boolean  <-- renders nothing
        //
        // render() should be a pure function. Makes it much easier to think about components.
        // It's highly recommended to NOT modify state during render(), or any of the function it calls
        // Avoid interacting with the browser (do so in componentDidMount(),etc. instead)
        //
        // To NOT invoke render() at all, use the function shouldComponentUpdate() and return false
        return (
            <div>
                { greet() }
                { greet("Andrew") }
                <p>Time { new Date().toLocaleTimeString() }</p>
            </div>
        );
    }
}
