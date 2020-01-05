import React, {Component} from 'react';

export class CV extends Component {
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
        );
    }
}

// export default CV; // TODO: Do not believe 'default' is needed, since all classes that use it can just specify { CV }
