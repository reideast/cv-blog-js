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
                    <dt><cv-date-circa>2019-Current</cv-date-circa></dt>
                    <dd>
                        <cv-company>IBM</cv-company>
                        <cv-job-title>Software Engineer</cv-job-title>
                        <cv-location>Galway, Ireland</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2018-2019</cv-date-circa></dt>
                    <dd>
                        <cv-company>IBM</cv-company>
                        <cv-job-title>Software Engineering Intern</cv-job-title>
                        <cv-location>Galway, Ireland</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2012-2015</cv-date-circa></dt>
                    <dd>
                        <cv-company>Tech Data</cv-company>
                        <cv-job-title>Quality Assurance Technician II</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2009-2012</cv-date-circa></dt>
                    <dd>
                        <cv-company>Office Depot, Inc.</cv-company>
                        <cv-job-title>Customer Services Specialist II</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2007-2009</cv-date-circa></dt>
                    <dd>
                        <cv-company>Circuit City</cv-company>
                        <cv-job-title>Lead PC Technician</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2005-2007</cv-date-circa></dt>
                    <dd>
                        <cv-company>CompUSA</cv-company>
                        <cv-job-title>Service Writer</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2003-2004</cv-date-circa></dt>
                    <dd>
                        <cv-company>San Diego Zoological Society's Wild Animal Park</cv-company>
                        <cv-job-title>Visitor Assistance Officer</cv-job-title>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li></li>
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
                    <dt><cv-date-circa>2016-2019</cv-date-circa></dt>
                    <dd>
                        <cv-degree>Bachelor of Science (Honours), Computer Science</cv-degree>
                        <cv-school>National University of Ireland, Galway</cv-school>
                        <cv-location>Galway, Ireland</cv-location>
                        <ul>
                            <li></li>
                        </ul>
                    </dd>
                    <dt><cv-date-circa>2014-2015</cv-date-circa></dt>
                    <dd>
                        <cv-degree>Associate of Science, Computer Science</cv-degree>
                        <cv-school>Riverside City College</cv-school>
                        <cv-location>California, United States</cv-location>
                        <ul>
                            <li></li>
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
