import React, {Component} from 'react';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

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
                <CVContactHeader />
            </section>
        );
    }
}

class CVContactHeader extends Component {
    render() {
        return (
            <div>
                <cv-contacts>
                    <cv-email>{/* icon:email */}andrew@andreweast.net</cv-email>
                    <cv-location>{/* icon:globe/location */}Galway, Ireland</cv-location>
                    <cv-web-portfolio>{/* icon:email */}andreweast.net/portfolio</cv-web-portfolio>
                    <cv-web-github>{/* icon:github */}github.com/reideast</cv-web-github>
                    <cv-web-linkedin>{/* icon:linkedin */}linkedin.com/in/andrewreideast</cv-web-linkedin>
                    <cv-web-twitter>{/* icon:twitter */}deskase</cv-web-twitter>
                    <cv-web-aboutme>{/* icon:aboutme */}andrewreideast</cv-web-aboutme>
                </cv-contacts>
            </div>
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
                <p>Graduate software engineer with a lifelong enthusiasm for coding along with ten years of proven IT experience</p>
            </section>
        );
    }
}

class CVWorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
            apiFetchCompleted: false,
            apiFetchFailureMessage: ''
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(REACT_APP_API_URL + '/cv/job');
            if (res.status >= 400) {
                throw new Error('API Failure');
            }
            const result = await res.json();
            this.setState({ jobs: result, apiFetchCompleted: true });
        } catch (err) {
            console.error('API fetch failure', err); // DEBUG
            this.setState({ apiFetchFailureMessage: 'API fetch failure', apiFetchCompleted: true });
        }
    }

    render() {
        // Looping over JSON to make DOM elements, See: https://reactjs.org/docs/getting-started.html
        // TODO: Don't use the inline conditional, separate out into variables
        return (
            <section className='cv-grid-section-work cv-grid-section'>
                <h2>Work Experience</h2>
                {(this.state.apiFetchCompleted) ? (
                    (this.state.jobs) ? (
                        <dl>
                            {this.state.jobs.map((job, index) => (
                                <React.Fragment key={index}>
                                    <dt><cv-date-circa>{job.date}</cv-date-circa></dt>
                                    <dd>
                                        <cv-company>{job.company}</cv-company>
                                        <cv-job-title>{job.title}</cv-job-title>
                                        <cv-location>{job.location}</cv-location>
                                        <ul>
                                            {job.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    ) : (
                        <div className='api-failure'>
                            {this.state.apiFetchFailureMessage}
                        </div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </section>
        );
    }
}

class CVEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: null,
            apiFetchCompleted: false,
            apiFetchFailureMessage: ''
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(REACT_APP_API_URL + '/cv/schools');
            if (res.status >= 400) {
                throw new Error('API Failure');
            }
            const result = await res.json();
            this.setState({ schools: result, apiFetchCompleted: true });
        } catch (err) {
            console.error('API fetch failure', err); // DEBUG
            this.setState({ apiFetchFailureMessage: 'API fetch failure', apiFetchCompleted: true });
        }
    }

    render() {
        // TODO: Don't use the inline conditional, separate out into variables
        return (
            <section className='cv-grid-section-education cv-grid-section'>
                <h2>Education</h2>
                {(this.state.apiFetchCompleted) ? (
                    (this.state.schools) ? (
                        <dl>
                            {this.state.schools.map((school, index) => (
                                <React.Fragment key={index}>
                                    <dt><cv-date-circa>{school.date}</cv-date-circa></dt>
                                    <dd>
                                        <cv-degree>{school.degree}</cv-degree>
                                        <cv-school>{school.degree}</cv-school>
                                        <cv-location>{school.location}</cv-location>
                                        <cv-thesis>{/* icon:github */}<a href={school.thesis.url}>{school.thesis.description}</a></cv-thesis>
                                        <cv-gpa-overall-results>{school.gpa_overall_results}</cv-gpa-overall-results>
                                        <ul>
                                            {school.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    ) : (
                        <div className='api-failure'>
                            {this.state.apiFetchFailureMessage}
                        </div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </section>
        );
    }
}

// TODO: component for a project, e.g. github or personal profile etc.
// TODO:     It will extract the base URL to determine the icon to show
// TODO:     nice things: it's reusable for Education, Projects, etc.

// class CVProjects extends Component {
//     render() {
//         // TODO: This is not used, nor is it placed in the Grid via CSS
//         return (
//             <section className='cv-grid-section-community cv-grid-section'>
//                 <h2>Technical Projects</h2>
//                 <dl>
//                     <dt>Media upload and collaboration app in JavaScript, continuous integration on Travis CI</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Professional portfolio website for client using responsive Bootstrap</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Content management system built using vanilla PHP</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Interactive games for online design boot camp in JavaScript</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                     <dt>Wedding RSVP website with user management backend in PHP</dt>
//                     <dd>TODO link{/* icon:github */}</dd>
//                 </dl>
//             </section>
//         );
//     }
// }

/*
Hobbies
Maker DIY hardware and software hacking, tabletop RPGs, hiking and camping
Volunteering with Digital Champions at NUI Galway to teach digital literacy essentials

Professional Competencies
<strong>Analytical thinking</strong> with talent for identifying and streamlining complex processes
Proven aptitude recognising gaps in knowledge and <strong>taking initiative to learn</strong> and certify in large array of concepts quickly
<strong>Customer relations</strong> expertise gained through 6 years of retail tech support
<strong>Supervisor</strong> of department of 4 technicians at Circuit City; oversaw 5-10 at Tech Data
Exceptional <strong>communication</strong>; can rapidly assimilate information and convey it to others
Flexible <strong>team player</strong> able to work effectively in a large team or <strong>independently</strong> directed
 */

class CVCommunity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberships: null,
            apiFetchCompleted: false,
            apiFetchFailureMessage: ''
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(REACT_APP_API_URL + '/cv/memberships');
            if (res.status >= 400) {
                throw new Error('API Failure');
            }
            const result = await res.json();
            this.setState({ memberships: result, apiFetchCompleted: true });
        } catch (err) {
            console.error('API fetch failure', err); // DEBUG
            this.setState({ apiFetchFailureMessage: 'API fetch failure', apiFetchCompleted: true });
        }
    }

    render() {
        // TODO: Don't use the inline conditional, separate out into variables
        return (
            <section className='cv-grid-section-community cv-grid-section'>
                <h2>Professional Memberships and Certifications</h2>
                {(this.state.apiFetchCompleted) ? (
                    (this.state.memberships) ? (
                        <dl>
                            {this.state.memberships.map((membership, index) => (
                                <React.Fragment key={index}>
                                    <dt><cv-organization>{membership.organization}</cv-organization></dt>
                                    <dd>
                                        <cv-date-circa>{membership.date}</cv-date-circa>
                                        <ul>
                                            {membership.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    ) : (
                        <div className='api-failure'>
                            {this.state.apiFetchFailureMessage}
                        </div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </section>
        );
    }
}

class CVSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: null,
            apiFetchCompleted: false,
            apiFetchFailureMessage: ''
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch(REACT_APP_API_URL + '/cv/skills');
            if (res.status >= 400) {
                throw new Error('API Failure');
            }
            const result = await res.json();
            this.setState({ skills: result, apiFetchCompleted: true });
        } catch (err) {
            console.error('API fetch failure', err); // DEBUG
            this.setState({ apiFetchFailureMessage: 'API fetch failure', apiFetchCompleted: true });
        }
    }

    render() {
        // TODO: Don't use the inline conditional, separate out into variables
        return (
            <section className='cv-grid-section-skills cv-grid-section'>
                <h2>Technical Skills</h2>
                {(this.state.apiFetchCompleted) ? (
                    (this.state.skills) ? (
                        <dl>
                            {this.state.skills.map((skill, index) => (
                                <React.Fragment key={index}>
                                    <dt>{skill.skill}</dt>
                                    <dd>
                                        <ul>
                                            {skill.details.map((detail, index) => (
                                                <li key={index}>{detail}</li>
                                            ))}
                                        </ul>
                                    </dd>
                                </React.Fragment>
                            ))}
                        </dl>
                    ) : (
                        <div className='api-failure'>
                            {this.state.apiFetchFailureMessage}
                        </div>
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </section>
        );
    }
}
