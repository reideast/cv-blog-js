import React, {Component} from 'react';

// Resume/CV using CSS Grid, see: https://css-tricks.com/new-year-new-job-lets-make-a-grid-powered-resume/
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
        return (
            <section className='cv-grid-section-name cv-grid-section'>
                <h1>Andrew Reid East</h1>
            </section>
        );
    }
}

class CVPhoto extends Component {
    render() {
        return (
            <section className='cv-grid-section-photo cv-grid-section'>
                <img className='cv-photo img-circle' src='img/cv/headshot.jpg' alt='Headshot of person in CV' />
            </section>
        );
    }
}

class CVAbout extends Component {
    render() {
        return (
            <section className='cv-grid-section-about cv-grid-section'>
                <p>Hello world, I'm Andrew. I like coding, I'm nerdy about a lot of stuff, and I putting together this web site now!</p>
            </section>
        );
    }
}

class CVWorkExperience extends Component {
    render() {
        return (
            <section className='cv-grid-section-work cv-grid-section'>
                <h2>Work Experience</h2>
                <dl>
                    <dt>IBM</dt>
                    <dd>
                        <ul>
                            <li>Software Engineer</li>
                            <li>2019-Current</li>
                            <li>Galway, Ireland</li>
                        </ul>
                    </dd>
                    <dt>IBM</dt>
                    <dd>
                        <ul>
                            <li>Software Engineering Intern</li>
                            <li>2018-2019</li>
                            <li>Galway, Ireland</li>
                        </ul>
                    </dd>
                    <dt>Tech Data</dt>
                    <dd>
                        <ul>
                            <li>Quality Assurance Technician II</li>
                            <li>2012-2015</li>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>Office Depot, Inc.</dt>
                    <dd>
                        <ul>
                            <li>Customer Services Specialist II</li>
                            <li>2009-2012</li>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>Circuit City</dt>
                    <dd>
                        <ul>
                            <li>Lead PC Technician</li>
                            <li>2007-2009</li>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>CompUSA</dt>
                    <dd>
                        <ul>
                            <li>Service Writer</li>
                            <li>2005-2007</li>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>San Diego Zoological Society's Wild Animal Park</dt>
                    <dd>
                        <ul>
                            <li>Visitor Assistance Officer</li>
                            <li>2003-2004</li>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        );
    }
}

class CVEducation extends Component {
    render() {
        return (
            <section className='cv-grid-section-education cv-grid-section'>
                <h2>Education</h2>
                <dl>
                    <dt>Bachelor of Science (Honours), Computer Science</dt>
                    <dd>
                        <ul>
                            <li>National University of Ireland, Galway</li>
                            <li>2016-2019</li>
                        </ul>
                    </dd>
                    <dt>Associate of Science, Computer Science</dt>
                    <dd>
                        <ul>
                            <li>Riverside City College</li>
                            <li>2014-2015</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        );
    }
}

class CVCommunity extends Component {
    render() {
        return (
            <section className='cv-grid-section-community cv-grid-section'>
                <hr />
                <hr />
            </section>
        );
    }
}

class CVSkills extends Component {
    render() {
        return (
            <section className='cv-grid-section-skills cv-grid-section'>
                <h2>Technical Skills</h2>
                <dl>
                    <dt>Programming Languages</dt>
                    <dd>
                        <ul>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Node.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>PostgreSQL</li>
                            <li>C</li>
                            <li>bash</li>
                        </ul>
                    </dd>
                    <dt></dt>
                </dl>
            </section>
        );
    }
}
