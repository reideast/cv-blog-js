import React, {Component} from 'react';

export class CV extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main id='cv-wrapper'>
                <article className='cv-grid-container'>
                    <CVName />
                    <CVPhoto />
                    <CVAbout />
                    <CVWorkExperience />
                    <CVEducation />
                    <CVCommunity />
                    <CVSkills />
                </article>
            </main>
        );
    }
}

export class CVName extends Component {
    render() {
        return <section className='cv-grid-section-name cv-grid-section'>
            <hr />
        </section>
    }
}

class CVPhoto extends Component {
    render() {
        return <section className='cv-grid-section-photo cv-grid-section'>
            <div className='circle'></div>
        </section>;
    }
}

class CVAbout extends Component {
    render() {
        return <section className='cv-grid-section-about cv-grid-section'>
            <hr />
            <hr />
        </section>;
    }
}

class CVWorkExperience extends Component {
    render() {
        return <section className='cv-grid-section-work cv-grid-section'>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
        </section>;
    }
}

class CVEducation extends Component {
    render() {
        return <section className='cv-grid-section-education cv-grid-section'>
            <hr />
            <hr />
        </section>;
    }
}

class CVCommunity extends Component {
    render() {
        return <section className='cv-grid-section-community cv-grid-section'>
            <hr />
            <hr />
        </section>;
    }
}

class CVSkills extends Component {
    render() {
        return <section className='cv-grid-section-skills cv-grid-section'>
            <hr />
            <hr />
        </section>;
    }
}
