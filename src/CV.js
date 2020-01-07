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
                    <dt>2019-Current</dt>
                    <dd>
                        <h3>IBM</h3>
                        <h4>Software Engineer</h4>
                        <ul>
                            <li>Galway, Ireland</li>
                        </ul>
                    </dd>
                    <dt>2018-2019</dt>
                    <dd>
                        <h3>IBM</h3>
                        <h4>Software Engineering Intern</h4>
                        <ul>
                            <li>Galway, Ireland</li>
                        </ul>
                    </dd>
                    <dt>2012-2015</dt>
                    <dd>
                        <h3>Tech Data</h3>
                        <h4>Quality Assurance Technician II</h4>
                        <ul>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>2009-2012</dt>
                    <dd>
                        <h3>Office Depot, Inc.</h3>
                        <h4>Customer Services Specialist II</h4>
                        <ul>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>2007-2009</dt>
                    <dd>
                        <h3>Circuit City</h3>
                        <h4>Lead PC Technician</h4>
                        <ul>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>2005-2007</dt>
                    <dd>
                        <h3>CompUSA</h3>
                        <h4>Service Writer</h4>
                        <ul>
                            <li>California, United States</li>
                        </ul>
                    </dd>
                    <dt>2003-2004</dt>
                    <dd>
                        <h3>San Diego Zoological Society's Wild Animal Park</h3>
                        <h4>Visitor Assistance Officer</h4>
                        <ul>
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
                    <dt>2016-2019</dt>
                    <dd>
                        <h3>Bachelor of Science (Honours), Computer Science</h3>
                        <h4>National University of Ireland, Galway</h4>
                        <ul>
                        </ul>
                    </dd>
                    <dt>2014-2015</dt>
                    <dd>
                        <h3>Associate of Science, Computer Science</h3>
                        <h4>Riverside City College</h4>
                        <ul>
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
                    <dt>Coding tools</dt>
                    <dd>
                        <ul>
                            <li>git</li>
                            <li>vim</li>
                            <li>AWS</li>
                            <li>IntelliJ</li>
                            <li>Gradle</li>
                            <li>Jira</li>
                        </ul>
                    </dd>
                    <dt>IT Systems Admin</dt>
                    <dd>
                        <ul>
                            <li>Windows 10,8,7,XP</li>
                            <li>Windows Server 2012</li>
                            <li>RHEL</li>
                            <li>CentOS</li>
                            <li>Cisco hardware & IOS</li>
                            <li>Rack-mount server hardware</li>
                        </ul>
                    </dd>
                    <dt>Office Skills</dt>
                    <dd>
                        <ul>
                            <li>Excel</li>
                            <li>Access</li>
                            <li>Publisher</li>
                            <li>Word</li>
                            <li>Visio</li>
                            <li>Typing 80 WPM</li>
                        </ul>
                    </dd>
                </dl>
            </section>
        );
    }
}
